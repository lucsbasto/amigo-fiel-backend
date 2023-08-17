import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';
import { User } from './user.entity';
import { Address } from 'src/addresses/address.entity';
import { Company } from 'src/companies/company.entity';
import { FeedSpot } from 'src/feedspots/feedspot.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      User,
      FeedSpot,
      Address,
      Company,
      UserRepository,
    ]),
  ],
  providers: [UsersService, UserRepository],
  controllers: [UsersController],
})
export class UsersModule {}
