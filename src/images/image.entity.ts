import { FeedSpot } from 'src/feedspots/feedspot.entity';
import { BaseEntity } from 'src/utils/entities/base.entity';
import { Entity, Column, ManyToOne } from 'typeorm';

@Entity()
export class Image extends BaseEntity {
  @Column()
  imageUrl: string;

  @ManyToOne((_type) => FeedSpot, (feedSpot) => feedSpot.images)
  feedSpot: FeedSpot;
}
