import { Address } from 'src/addresses/address.entity';
import { FeedSpot } from 'src/feedspots/feedspot.entity';
import { BaseEntity } from 'src/utils/entities/base.entity';
import {
  Entity,
  Column,
  OneToMany,
  ManyToMany,
  JoinColumn,
  OneToOne,
} from 'typeorm';

@Entity('users')
export class User extends BaseEntity {
  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  phoneNumber: string;

  @Column()
  email: string;

  @Column({ nullable: true, default: false })
  isAdmin: boolean;

  @Column({ nullable: true, default: false })
  isVerified: boolean;

  @Column({ nullable: true })
  avatarUrl?: string;

  @Column()
  fullName?: string;

  @OneToMany((_type) => FeedSpot, (feedSpot) => feedSpot.filledBy)
  filledFeedSpots: FeedSpot[];

  @OneToMany((_type) => FeedSpot, (feedSpot) => feedSpot.createdBy)
  createdFeedSpots: FeedSpot[];

  @ManyToMany((_type) => FeedSpot, (feedSpot) => feedSpot.likedBy)
  likedFeedSpots: FeedSpot[];

  @Column({ nullable: true })
  addressId: string;

  @OneToOne((_type) => Address)
  @JoinColumn()
  address: Address;
}
