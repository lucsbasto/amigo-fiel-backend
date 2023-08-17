import { Address } from 'src/addresses/address.entity';
import { Image } from 'src/images/image.entity';
import { User } from 'src/users/user.entity';
import { BaseEntity } from 'src/utils/entities/base.entity';
import {
  Entity,
  Column,
  ManyToOne,
  ManyToMany,
  JoinTable,
  OneToMany,
  OneToOne,
  JoinColumn,
} from 'typeorm';

@Entity('feedspots')
export class FeedSpot extends BaseEntity {
  @Column()
  isFull: boolean;

  @Column({ nullable: true })
  filledById: string;

  @ManyToOne((_type) => User, (user) => user.filledFeedSpots)
  filledBy: User | null;

  @Column({ nullable: true })
  createdById: string;

  @ManyToOne((_type) => User, (user) => user.createdFeedSpots)
  createdBy: User | null;

  @Column('double precision')
  latitude: number;

  @Column('double precision')
  longitude: number;

  @Column({ nullable: true })
  landmark: string;

  @ManyToMany((_type) => User, (user) => user.likedFeedSpots)
  @JoinTable()
  likedBy: User[] | null;

  @OneToMany((_type) => Image, (image) => image.feedSpot)
  images: Image[];

  @Column({ nullable: true })
  addressId: string;

  @OneToOne((type) => Address)
  @JoinColumn()
  address: Address;
}
