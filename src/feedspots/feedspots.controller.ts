import {
  Controller,
  Param,
  Get,
  Body,
  Post,
  Put,
  Query,
  UseGuards,
  Request,
} from '@nestjs/common';
import { FeedspotsService } from './feedspots.service';
import { CreateFeedSpotDto } from './dtos/create-feedspot.dto';
import { FeedSpotResponseDto } from './dtos/feedspots-response.dto';
import { SupabaseGuard } from 'src/utils/supabase';
import { Public } from 'src/utils/decorators/public.decorator';

@Controller('feedspots')
@UseGuards(SupabaseGuard)
export class FeedspotsController {
  constructor(private readonly service: FeedspotsService) {}

  @Post()
  async create(@Body() input: CreateFeedSpotDto): Promise<FeedSpotResponseDto> {
    try {
      return this.service.create(input);
    } catch (error) {
      throw error;
    }
  }

  @Public()
  @Get()
  async findAll(): Promise<FeedSpotResponseDto[]> {
    return this.service.findAll();
  }

  @Public()
  @Get(':id')
  async findById(@Param('id') id: string): Promise<FeedSpotResponseDto> {
    return this.service.findById(id);
  }

  @Put(':id/fill')
  async fill(@Request() req: any): Promise<FeedSpotResponseDto> {
    return this.service.fill(req);
  }
}
