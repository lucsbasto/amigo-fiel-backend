import { ApiProperty } from '@nestjs/swagger';

export class CreateFeedSpotDto {
  @ApiProperty({ example: 'UUID', description: 'ID único do feedspot' })
  id: string;

  @ApiProperty({
    example: true,
    description: 'Indica se o feedspot está cheio',
    default: false,
  })
  isFull: boolean;

  @ApiProperty({
    example: 'UUID',
    description: 'ID do usuário que criou o feedspot',
  })
  createdById: string;

  @ApiProperty({ example: 123.456, description: 'Latitude do feedspot' })
  latitude: number;

  @ApiProperty({ example: 789.012, description: 'Longitude do feedspot' })
  longitude: number;

  @ApiProperty({
    example: 'Alguma descrição',
    description: 'Ponto de referência do feedspot',
  })
  landmark: string;
}
