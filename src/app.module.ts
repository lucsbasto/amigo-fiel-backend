import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FeedspotsModule } from './feedspots/feedspots.module';
import { UsersModule } from './users/users.module';
import { AddressesModule } from './addresses/addresses.module';
import { CompaniesModule } from './companies/companies.module';
import { ImagesModule } from './images/images.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { SupabaseModule } from './utils/supabase/supabase.module';
import { PostgresqlConfigService } from './database/postgresql-config.service';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, envFilePath: '.env' }),
    TypeOrmModule.forRootAsync({
      useClass: PostgresqlConfigService,
      inject: [PostgresqlConfigService],
    }),
    FeedspotsModule,
    UsersModule,
    AddressesModule,
    CompaniesModule,
    ImagesModule,
    AuthModule,
    SupabaseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
