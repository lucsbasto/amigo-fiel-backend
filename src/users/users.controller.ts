import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserResponseDto } from './dtos/user-response.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly service: UsersService) {}

  @Get()
  async findAll(): Promise<UserResponseDto[]> {
    return this.service.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<UserResponseDto> {
    return this.service.findById(id);
  }
}
