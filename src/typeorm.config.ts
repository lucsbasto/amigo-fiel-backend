import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from './users/user.entity';
import { Image } from './images/image.entity';
import { Company } from './companies/company.entity';
import { Address } from './addresses/address.entity';
import { FeedSpot } from './feedspots/feedspot.entity';

export const typeOrmConfig: TypeOrmModuleOptions = {
  // host: 'localhost',
  // type: 'postgres',
  // database: 'amigo-fiel',
  // port: 5432,
  // username: 'postgres',
  // password: 'postgres',
  host: 'db.xcobkrczeidtzovbhism.supabase.co',
  type: 'postgres',
  database: 'postgres',
  port: 5432,
  username: 'postgres',
  password: 'FTsa03UlmvJy7ApJ',
  entities: [User, FeedSpot, Address, Company, Image],
  synchronize: true, // Somente para desenvolvimento
};
