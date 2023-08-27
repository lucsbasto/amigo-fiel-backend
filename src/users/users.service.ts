import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dtos/create-user.dto';
import { User } from './user.entity';
import { AuthUser } from '@supabase/supabase-js';
import { ImagesService } from 'src/images/images.service';
import { BucketEnum } from 'src/utils/enums/bucket.enum';
import { RequestWithUser } from 'src/utils/interfaces/request-user';
import { getFile } from 'src/utils/get-file';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly repository: UserRepository,
    private imageService: ImagesService,
  ) {}

  async findAll() {
    return this.repository.find({ relations: ['address'] });
  }

  async findById(id: string): Promise<User> {
    const user = await this.repository.findOne({
      where: { id },
      relations: ['address'],
    });
    return user;
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    const { identifiers } = await this.repository.insert(createUserDto);
    const user = await this.repository.findOne({
      where: { id: identifiers.at(0).id },
    });
    return user;
  }

  async getLoggedUser(authUser?: AuthUser): Promise<User> {
    if (!authUser) {
      throw new UnauthorizedException('user not logged in');
    }
    const user = await this.repository.findOne({
      where: { id: authUser.id },
      relations: ['address'],
    });
    return user;
  }

  async uploadAvatar(req: RequestWithUser): Promise<User> {
    const { user, file } = getFile(req);
    const imageUploaded = await this.imageService.upload(
      file,
      BucketEnum.AVATARS,
    );
    const updatedUser = await this.findById(user.id);
    updatedUser.avatarUrl = imageUploaded.path;
    await this.repository.save(updatedUser);
    return updatedUser;
  }
}
