import { Module } from '@nestjs/common';
import { ImagesController } from './images.controller';
import { ImagesService } from './images.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Address } from 'src/addresses/address.entity';
import { Image } from './image.entity';
import { FeedSpot } from 'src/feedspots/feedspot.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Image, FeedSpot, Address])],
  controllers: [ImagesController],
  providers: [ImagesService],
})
export class ImagesModule {}
