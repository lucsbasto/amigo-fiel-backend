import {
  Controller,
  Post,
  Query,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { ImagesService } from './images.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { Public } from 'src/utils/decorators/public.decorator';
import { FileDTO } from './dtos/file.dto';
import { BucketEnum } from 'src/utils/enums/bucket.enum';

@Controller('images')
export class ImagesController {
  constructor(private readonly service: ImagesService) {}

  @Post('')
  @Public()
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(
    @UploadedFile() file: FileDTO,
    @Query('directory') directory: BucketEnum = BucketEnum.IMAGES,
  ) {
    await this.service.upload(file, directory);
  }
}
