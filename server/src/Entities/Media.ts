import { BaseEntity, Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { Listing } from "./Listing";

@Entity()
export class Media extends BaseEntity {
  @PrimaryColumn()
  id !: string;

  @Column()
  path !: string;

  @ManyToOne(()=> Listing, listing => listing.media)
  listing!: Listing;

  @Column({
      type : 'timestamp',
      nullable : true
  })
  created_at !: Date;

  @Column({
      type : 'timestamp',
      nullable : true
  })
  updated_at !: Date;

  @Column({
      type : 'timestamp',
      nullable : true
  })
  deleted_at !: Date;

  @Column()
  status !: number;
}