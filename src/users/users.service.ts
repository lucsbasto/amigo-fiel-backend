import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dtos/create-user.dto';
import { UserResponseDto } from './dtos/user-response.dto';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly repository: UserRepository,
  ) {}

  async findAll() {
    return this.repository.find({ relations: ['address'] });
  }

  async findById(id: string): Promise<UserResponseDto> {
    const user = await this.repository.findOne({
      where: { id },
      relations: ['address'],
    });
    return user;
  }

  async create(createUserDto: CreateUserDto): Promise<UserResponseDto> {
    createUserDto.lastName = `${createUserDto.firstName} ${createUserDto.lastName}`;
    return this.repository.create(createUserDto);
  }
}
