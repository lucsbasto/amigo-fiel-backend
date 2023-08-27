import { Module } from '@nestjs/common';

import { FeedspotsController } from './feedspots.controller';

import { FeedspotsService } from './feedspots.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Image } from 'src/images/image.entity';
import { FeedSpot } from './feedspot.entity';
import { Address } from 'src/addresses/address.entity';
import { User } from 'src/users/user.entity';
import { UsersService } from 'src/users/users.service';
import { SupabaseModule } from 'src/utils/supabase';
import { ImagesModule } from 'src/images/images.module';
import { UsersModule } from 'src/users/users.module';
import { ImagesService } from 'src/images/images.service';

@Module({
  imports: [
    SupabaseModule,
    UsersModule,
    ImagesModule,
    TypeOrmModule.forFeature([Image, FeedSpot, Address, User, Image]),
  ],
  controllers: [FeedspotsController],
  providers: [FeedspotsService, UsersService, ImagesService],
})
export class FeedspotsModule {}
