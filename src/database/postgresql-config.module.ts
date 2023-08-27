import { Module } from '@nestjs/common';
import { PostgresqlConfigService } from './postgresql-config.service';

@Module({
  providers: [PostgresqlConfigService],
})
export class PostgresqlConfigModule {}
