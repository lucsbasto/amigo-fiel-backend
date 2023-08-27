import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, MinLength, maxLength } from 'class-validator';

export class SignInDto {
  @ApiProperty()
  @IsString()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsString()
  @MinLength(8)
  password: string;
}
