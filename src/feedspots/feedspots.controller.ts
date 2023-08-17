import { Controller, Param, Get, Body, Post } from '@nestjs/common';
import { FeedspotsService } from './feedspots.service';
import { CreateFeedSpotDto } from './dtos/create-feedspot.dto';
import { FeedSpotResponseDto } from './dtos/feedspots-response.dto';

@Controller('feedspots')
export class FeedspotsController {
  constructor(private readonly service: FeedspotsService) {}

  @Post()
  async create(@Body() input: CreateFeedSpotDto): Promise<FeedSpotResponseDto> {
    return this.service.create(input);
  }

  @Get()
  async findAll(): Promise<any[]> {
    return this.service.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<any> {
    return this.service.findById(id);
  }
}
