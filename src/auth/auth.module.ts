import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersService } from 'src/users/users.service';
import { UserRepository } from 'src/users/user.repository';
import { User } from 'src/users/user.entity';
import { Address } from 'src/addresses/address.entity';
import { Company } from 'src/companies/company.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { SupabaseModule } from 'src/utils/supabase';

@Module({
  imports: [
    ConfigModule,
    SupabaseModule,
    TypeOrmModule.forFeature([User, Address, Company]),
  ],
  controllers: [AuthController],
  providers: [AuthService, UsersService, UserRepository],
})
export class AuthModule {}
