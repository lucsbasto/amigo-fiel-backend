import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FeedspotsModule } from './feedspots/feedspots.module';

@Module({
  imports: [FeedspotsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
