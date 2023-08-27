import { ApiProperty } from '@nestjs/swagger';

export class CreateFeedSpotDto {
  @ApiProperty({
    example: 'b991fff7-ae0a-40e9-b4c8-6c9e57158d41',
    description: 'ID único do feedspot',
  })
  id: string;

  @ApiProperty({
    example: true,
    description: 'Indica se o feedspot está cheio',
    default: false,
  })
  isFull: boolean;

  @ApiProperty({
    example: 'b991fff7-ae0a-40e9-b4c8-6c9e57158d41',
    description: 'ID do usuário que criou o feedspot',
  })
  createdById: string;

  @ApiProperty({ example: 12.4565, description: 'Latitude do feedspot' })
  latitude: number;

  @ApiProperty({ example: -56.0152, description: 'Longitude do feedspot' })
  longitude: number;

  @ApiProperty({
    example: 'Ponto de referência',
    description: 'Ponto de referência do feedspot',
  })
  landmark: string;
}
