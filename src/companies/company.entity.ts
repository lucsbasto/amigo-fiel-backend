import { Address } from 'src/addresses/address.entity';
import { BaseEntity } from 'src/utils/entities/base.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from 'typeorm';
@Entity()
export class Company extends BaseEntity {
  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  logoUrl: string;

  @Column()
  websiteUrl: string;

  @Column()
  phoneNumber: string;

  @OneToOne((_type) => Address)
  @JoinColumn()
  address: Address;
}
