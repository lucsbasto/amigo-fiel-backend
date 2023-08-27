import { Injectable } from '@nestjs/common';
import { Supabase } from 'src/utils/supabase';
import { FileDTO } from './dtos/file.dto';
import { BucketEnum } from 'src/utils/enums/bucket.enum';
import { ConfigService } from '@nestjs/config';
@Injectable()
export class ImagesService {
  constructor(
    private readonly supabase: Supabase,
    private configService: ConfigService,
  ) {}

  async upload(
    file: FileDTO,
    directory?: BucketEnum,
  ): Promise<{
    path: string;
  }> {
    const { data, error } = await this.supabase
      .getClient()
      .storage.from(directory)
      .upload(file.originalname, file.buffer, {
        cacheControl: '3600',
        upsert: false,
      });
    if (error) {
      throw error;
    }
    const storageUrl = this.configService.get<string>('STORAGE_URL');
    const imageUrl = `${storageUrl}/${directory}/${data.path}`;
    return { path: imageUrl };
  }
}
