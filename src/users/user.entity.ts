import { Address } from 'src/addresses/address.entity';
import { FeedSpot } from 'src/feedspots/feedspot.entity';
import { BaseEntity } from 'src/utils/entities/base.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToMany,
  JoinColumn,
  OneToOne,
} from 'typeorm';

@Entity('users')
export class User extends BaseEntity {
  @Column({ nullable: true })
  firstName: string;

  @Column({ nullable: true })
  lastName: string;

  @Column({ nullable: true })
  phoneNumber: string;

  @Column({ nullable: true })
  email: string;

  @Column({ nullable: true })
  isAdmin: boolean;

  @Column({ nullable: true })
  isVerified: boolean;

  @Column({ nullable: true })
  avatarUrl: string | null;

  @Column({ nullable: true })
  fullName: string | null;

  @OneToMany((_type) => FeedSpot, (feedSpot) => feedSpot.filledBy)
  filledFeedSpots: FeedSpot[];

  @OneToMany((_type) => FeedSpot, (feedSpot) => feedSpot.createdBy)
  createdFeedSpots: FeedSpot[];

  @ManyToMany((_type) => FeedSpot, (feedSpot) => feedSpot.likedBy)
  likedFeedSpots: FeedSpot[];

  @Column({ nullable: true })
  addressId: string;

  @OneToOne((type) => Address)
  @JoinColumn()
  address: Address;
}
