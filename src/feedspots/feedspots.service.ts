import { Injectable } from '@nestjs/common';
import { FeedSpot } from './feedspot.entity';
import { FeedspotRepository } from './feedspot.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { FeedSpotResponseDto } from './dtos/feedspots-response.dto';
import { CreateFeedSpotDto } from './dtos/create-feedspot.dto';
@Injectable()
export class FeedspotsService {
  constructor(
    @InjectRepository(FeedSpot)
    private readonly repository: FeedspotRepository,
  ) {}

  async findAll(): Promise<FeedSpotResponseDto[]> {
    return this.repository.find({
      relations: ['address', 'createdBy', 'filledBy'],
    });
  }

  async findById(id: string): Promise<FeedSpotResponseDto> {
    const feedspot = await this.repository.findOne({
      where: { id },
      relations: ['address', 'createdBy', 'filledBy'],
    });
    return feedspot;
  }

  async create(input: CreateFeedSpotDto): Promise<FeedSpotResponseDto> {
    const { identifiers } = await this.repository.insert(input);
    const feedspot = await this.repository.findOne({
      where: { id: identifiers.at(0).id },
      relations: ['address', 'createdBy', 'filledBy'],
    });
    return feedspot;
  }
}
