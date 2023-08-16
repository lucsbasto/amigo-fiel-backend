import { Module } from '@nestjs/common';

import { FeedspotsController } from './feedspots.controller';

import { FeedspotsService } from './feedspots.service';

@Module({
    controllers: [FeedspotsController],
    providers: [FeedspotsService],
})
export class FeedspotsModule {}
