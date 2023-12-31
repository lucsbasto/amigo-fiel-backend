import {
  Controller,
  Get,
  Logger,
  Param,
  Post,
  Request,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UserResponseDto } from './dtos/user-response.dto';
import { SupabaseGuard } from 'src/utils/supabase';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('users')
@UseGuards(SupabaseGuard)
export class UsersController {
  private readonly logger = new Logger(UsersController.name);
  constructor(private readonly service: UsersService) {}

  @Get()
  async findAll(): Promise<UserResponseDto[]> {
    this.logger.log('GET / called');
    return this.service.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<UserResponseDto> {
    this.logger.log('GET /ID called');
    return this.service.findById(id);
  }

  @Get('logged')
  async getLoggedUser(@Request() req: any) {
    return this.service.getLoggedUser(req.user);
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async upload(@Request() req: any) {
    return this.service.uploadAvatar(req);
  }
}
