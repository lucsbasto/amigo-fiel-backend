import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';
import { Image } from 'src/images/image.entity';
import { UserResponseDto } from 'src/users/dtos/user-response.dto';
import { BaseDto } from 'src/utils/dtos/base.dto';

export class FeedSpotResponseDto extends BaseDto {
  @ApiProperty({
    example: true,
    description: 'Indica se o feedspot está cheio',
  })
  isFull: boolean;

  @ApiProperty({
    type: () => UserResponseDto,
    description: 'Usuário que preencheu o feedspot',
  })
  filledBy: UserResponseDto;

  @ApiProperty({
    type: () => UserResponseDto,
    description: 'Usuário que criou o feedspot',
  })
  createdBy: UserResponseDto;

  @ApiProperty({ example: 40.712776, description: 'Latitude do feedspot' })
  latitude: number;

  @ApiProperty({ example: -74.005974, description: 'Longitude do feedspot' })
  longitude: number;

  @ApiProperty({
    example: 'Praça Times Square',
    description: 'Ponto de referência do feedspot',
  })
  landmark: string;

  @ApiProperty({
    example: '123 Main St, New York, NY 10001',
    description: 'Endereço completo do feedspot',
  })
  @IsOptional()
  fullAddress?: string;

  @ApiProperty({
    type: [UserResponseDto],
    description: 'Lista de usuários que curtiram o feedspot',
  })
  @IsOptional()
  likedBy?: UserResponseDto[];

  @ApiProperty({
    type: [Image],
    description: 'Lista de imagens associadas ao feedspot',
  })
  images: Image[];
}
