import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class CreateUserDto {
  @ApiPropertyOptional({ example: '123e4567-e89b-12d3-a456-426614174000' })
  id?: string;

  @ApiProperty({ example: 'John' })
  firstName: string;

  @ApiProperty({ example: 'Doe' })
  lastName: string;

  @ApiProperty({ example: 'John Doe' })
  fullName: string;

  @ApiProperty({ example: '63985221645' })
  phoneNumber: string;

  @ApiProperty({ example: 'john.doe@gmail.com' })
  email: string;

  @ApiProperty({ example: true })
  @IsOptional()
  isAdmin?: boolean;

  @ApiProperty({ example: true })
  @IsOptional()
  isVerified?: boolean;

  @ApiProperty({ example: 'url-da-imagem' })
  avatarUrl?: string;
}
