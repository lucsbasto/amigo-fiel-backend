import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'John' })
  firstName: string;

  @ApiProperty({ example: 'Doe' })
  lastName: string;

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
