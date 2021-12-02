import { BaseEntity, Column, Entity, ManyToOne, PrimaryColumn,JoinTable, ManyToMany, OneToMany, } from "typeorm";
import { Listing } from "./Listing";

@Entity()
export class Promo extends BaseEntity {
  @PrimaryColumn()
  id !: string;

  @Column()
  nama !: string;

  @Column({
      type : 'timestamp',
      nullable : true
  })
  tanggal_mulai !: Date;

  @Column({
      type : 'timestamp',
      nullable : true
  })
  tanggal_akhir !: Date;

  @Column()
  deskripsi !: string;

  @Column()
  jenis_promo !: number;

  @Column()
  besaran !: number;

  @OneToMany(() => Listing, listing => listing.promo)
  listings!: Listing[];

  @Column({
    type: 'timestamp',
    nullable: true,
  })
  created_at !: Date;

  @Column({
    type: 'timestamp',
    nullable: true,
  })
  updated_at !: Date;

  @Column({
    type: 'timestamp',
    nullable: true,
  })
  deleted_at !: Date;

  @Column()
  status!: number;
}