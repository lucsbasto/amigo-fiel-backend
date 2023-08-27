import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dtos/create-user.dto';
import { User } from './user.entity';
import { AuthUser } from '@supabase/supabase-js';
import { Supabase } from 'src/utils/supabase';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly repository: UserRepository,
    private readonly supabase: Supabase,
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
    createUserDto.lastName = `${createUserDto.firstName} ${createUserDto.lastName}`;
    return this.repository.create(createUserDto);
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
}
