import { Injectable, NotFoundException } from '@nestjs/common';
import { FeedSpot } from './feedspot.entity';
import { FeedspotRepository } from './feedspot.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { FeedSpotResponseDto } from './dtos/feedspots-response.dto';
import { CreateFeedSpotDto } from './dtos/create-feedspot.dto';
import { UsersService } from 'src/users/users.service';
@Injectable()
export class FeedspotsService {
  constructor(
    @InjectRepository(FeedSpot)
    private readonly repository: FeedspotRepository,
    private readonly userService: UsersService,
  ) {}

  async findAll(): Promise<FeedSpotResponseDto[]> {
    return this.repository.find({
      relations: ['address', 'createdBy', 'filledBy', 'images'],
    });
  }

  async findById(id: string): Promise<FeedSpotResponseDto> {
    const feedspot = await this.repository.findOne({
      where: { id },
      relations: ['address', 'createdBy', 'filledBy', 'images'],
    });
    return feedspot;
  }

  async create(input: CreateFeedSpotDto): Promise<FeedSpotResponseDto> {
    const { identifiers } = await this.repository.insert(input);
    const feedspot = await this.repository.findOne({
      where: { id: identifiers.at(0).id },
      relations: ['address', 'createdBy', 'filledBy', 'images'],
    });
    return feedspot;
  }

  async fill(req: any): Promise<FeedSpotResponseDto> {
    const { params, user } = req;
    const feedspot = await this.repository.findOne({
      where: { id: params.id },
    });
    if (!feedspot) {
      throw new NotFoundException('Feedspot not found.');
    }
    const loggedUser = await this.userService.getLoggedUser(user);
    if (!loggedUser) {
      throw new NotFoundException('User not found.');
    }
    feedspot.isFull = true;
    feedspot.filledBy = loggedUser;
    await this.repository.update({ id: params.id }, feedspot);
    return feedspot;
  }
}
