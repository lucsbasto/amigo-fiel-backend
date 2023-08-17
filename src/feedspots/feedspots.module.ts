import { Module } from '@nestjs/common';

import { FeedspotsController } from './feedspots.controller';

import { FeedspotsService } from './feedspots.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Image } from 'src/images/image.entity';
import { FeedSpot } from './feedspot.entity';
import { Address } from 'src/addresses/address.entity';
import { User } from 'src/users/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Image, FeedSpot, Address, User])],
  controllers: [FeedspotsController],
  providers: [FeedspotsService],
})
export class FeedspotsModule {}
