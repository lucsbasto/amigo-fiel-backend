import { FeedSpot } from 'src/feedspots/feedspot.entity';
import { BaseEntity } from 'src/utils/entities/base.entity';
import { Entity, Column, ManyToOne } from 'typeorm';

@Entity('images')
export class Image extends BaseEntity {
  @Column({ nullable: false })
  imageUrl: string;

  @ManyToOne((_type) => FeedSpot, (feedSpot) => feedSpot.images)
  feedSpot: FeedSpot;
}
