import { Module } from '@nestjs/common';
import { AddressesService } from './addresses.service';
import { AddressesController } from './addresses.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/users/user.entity';
import { Address } from './address.entity';
import { Company } from 'src/companies/company.entity';
import { Image } from 'src/images/image.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Address, Company, Image])],
  providers: [AddressesService],
  controllers: [AddressesController],
})
export class AddressesModule {}
