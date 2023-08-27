import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SupabaseExceptionFilter } from './utils/exceptions/supabase.exception-filter';
import { Reflector } from '@nestjs/core';
import { SupabaseGuard } from './utils/supabase';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const reflector = app.get(Reflector);
  const config = new DocumentBuilder()
    .setTitle('Amigo Fiel')
    .setDescription('Amigo Fiel API description')
    .setVersion('1.0')
    .addTag('Amigo Fiel')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  app.useGlobalGuards(new SupabaseGuard(reflector));
  app.useGlobalFilters(new SupabaseExceptionFilter());
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
