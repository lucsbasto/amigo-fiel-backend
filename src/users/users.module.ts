import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';
import { User } from './user.entity';
import { Address } from 'src/addresses/address.entity';
import { Company } from 'src/companies/company.entity';
import { FeedSpot } from 'src/feedspots/feedspot.entity';
import { SupabaseModule } from 'src/utils/supabase';
import { ImagesModule } from 'src/images/images.module';
import { ImagesService } from 'src/images/images.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule,
    SupabaseModule,
    ImagesModule,
    TypeOrmModule.forFeature([User, FeedSpot, Address, Company]),
  ],
  providers: [UsersService, UserRepository, ImagesService],
  controllers: [UsersController],
})
export class UsersModule {}
