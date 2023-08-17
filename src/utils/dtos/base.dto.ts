import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsUUID } from 'class-validator';

export class BaseDto {
  @ApiProperty({
    example: '123e4567-e89b-12d3-a456-426614174000',
    description: 'ID único',
  })
  @IsUUID()
  id: string;

  @ApiProperty({
    example: '2023-08-16T12:34:56.789Z',
    description: 'Data de criação',
  })
  @IsDateString()
  createdAt: Date;

  @ApiProperty({
    example: '2023-08-16T12:34:56.789Z',
    description: 'Data de atualização',
  })
  @IsDateString()
  updatedAt: Date;

  @ApiProperty({
    example: '2023-08-16T12:34:56.789Z',
    description: 'Data de exclusão',
  })
  @IsDateString()
  deletedAt: Date;
}
