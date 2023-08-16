import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FeedspotsModule } from './feedspots/feedspots.module';
import { UsersModule } from './users/users.module';
import { AddressesModule } from './addresses/addresses.module';
import { CompaniesModule } from './companies/companies.module';
import { ImagesModule } from './images/images.module';

@Module({
  imports: [FeedspotsModule, UsersModule, AddressesModule, CompaniesModule, ImagesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
