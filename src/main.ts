import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SupabaseExceptionFilter } from './utils/exceptions/supabase.exception-filter';
import { Reflector } from '@nestjs/core';
import { SupabaseGuard } from './utils/supabase';
import * as dotenv from 'dotenv';

async function bootstrap() {
  dotenv.config();
  const app = await NestFactory.create(AppModule);
  const reflector = app.get(Reflector);
  app.useGlobalGuards(new SupabaseGuard(reflector));
  app.useGlobalFilters(new SupabaseExceptionFilter());
  await app.listen(3000);
}
bootstrap();
