import {
  Controller,
  Param,
  Get,
  Body,
  Post,
  Put,
  UseGuards,
  Request,
} from '@nestjs/common';
import { FeedspotsService } from './feedspots.service';
import { CreateFeedSpotDto } from './dtos/create-feedspot.dto';
import { FeedSpotResponseDto } from './dtos/feedspots-response.dto';
import { SupabaseGuard } from 'src/utils/supabase';
import { Public } from 'src/utils/decorators/public.decorator';
import { ApiBearerAuth, ApiOkResponse } from '@nestjs/swagger';

@Controller('feedspots')
@ApiBearerAuth()
@UseGuards(SupabaseGuard)
export class FeedspotsController {
  constructor(private readonly service: FeedspotsService) {}

  @Post()
  @ApiOkResponse({ type: FeedSpotResponseDto })
  async create(@Body() input: CreateFeedSpotDto): Promise<FeedSpotResponseDto> {
    return this.service.create(input);
  }

  @Public()
  @Get()
  @ApiOkResponse({ type: [FeedSpotResponseDto] })
  async findAll(): Promise<FeedSpotResponseDto[]> {
    return this.service.findAll();
  }

  @Public()
  @Get(':id')
  @ApiOkResponse({ type: FeedSpotResponseDto })
  async findById(@Param('id') id: string): Promise<FeedSpotResponseDto> {
    return this.service.findById(id);
  }

  @Put(':id/fill')
  @ApiOkResponse({ type: FeedSpotResponseDto })
  async fill(@Request() req: any): Promise<FeedSpotResponseDto> {
    return this.service.fill(req);
  }
}
