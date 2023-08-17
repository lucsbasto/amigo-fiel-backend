import { ApiProperty } from '@nestjs/swagger';
import { Address } from 'src/addresses/address.entity';

export class UserResponseDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  firstName: string;

  @ApiProperty()
  lastName: string;

  @ApiProperty()
  phoneNumber: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  isAdmin: boolean;

  @ApiProperty()
  isVerified: boolean;

  @ApiProperty()
  address?: Address;

  @ApiProperty()
  avatarUrl?: string;

  @ApiProperty()
  fullName?: string;
}
