import { BaseEntity } from 'src/utils/entities/base.entity';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Address extends BaseEntity {
  @Column({ nullable: true })
  street: string;

  @Column({ nullable: true })
  number: string;

  @Column({ nullable: true })
  block: string;

  @Column({ nullable: true })
  cep: string;
}
