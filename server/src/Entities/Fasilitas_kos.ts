import { BaseEntity, Column, Entity, JoinTable, ManyToMany, PrimaryColumn } from "typeorm";
import { Listing } from "./Listing";

@Entity()
export class Fasilitas_kos extends BaseEntity {
  @PrimaryColumn()
  id!: string;

  @Column()
  nama!: string;

  @Column()
  keterangan!: string;

  @Column()
  status!: number;
  
}
