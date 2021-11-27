import { BaseEntity, Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { Listing } from "./Listing";

@Entity()
export class Ketentuan_peraturan extends BaseEntity {
  @PrimaryColumn()
  id!: string;

  @Column()
  isi!: string;

  @Column()
  tipe!: number;

  @ManyToOne(() => Listing, listing => listing.ketentuan_peraturan)
  listing!: Listing;

  @Column()
  status!: number;
  
}
