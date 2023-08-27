import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Address } from 'src/addresses/address.entity';

export class UserResponseDto {
  @ApiProperty()
  id: string;

  @ApiPropertyOptional()
  accessToken?: string;

  @ApiProperty()
  firstName: string;

  @ApiProperty()
  lastName: string;

  @ApiProperty()
  phoneNumber: string;

  @ApiProperty()
  email: string;

  @ApiPropertyOptional()
  isAdmin?: boolean;

  @ApiPropertyOptional()
  isVerified?: boolean;

  @ApiPropertyOptional()
  address?: Address;

  @ApiPropertyOptional()
  avatarUrl?: string;

  @ApiPropertyOptional()
  fullName?: string;
}
