import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { Address } from 'src/addresses/address.entity';
import { Company } from 'src/companies/company.entity';
import { FeedSpot } from 'src/feedspots/feedspot.entity';
import { User } from 'src/users/user.entity';
import { Image } from 'src/images/image.entity';

@Injectable()
export class PostgresqlConfigService implements TypeOrmOptionsFactory {
  constructor(private configService: ConfigService) {}
  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      host: this.configService.get<string>('DATABASE_HOST'),
      type: 'postgres',
      database: this.configService.get<string>('DATABASE_NAME'),
      port: this.configService.get<number>('DATABASE_PORT'),
      username: this.configService.get<string>('DATABASE_USER'),
      password: this.configService.get<string>('DATABASE_PASSWORD'),
      entities: [User, FeedSpot, Address, Company, Image],
      synchronize: true,
    };
  }
}
