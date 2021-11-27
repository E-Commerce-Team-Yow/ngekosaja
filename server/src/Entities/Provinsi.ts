import { BaseEntity, Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Kota } from "./Kota";

@Entity()
export class Provinsi extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  nama !: string;

  @OneToMany(() => Kota, kota => kota.provinsi)
  kota!: Kota;

  @Column()
  lokasi !: number;

  @Column()
  status !: number;
}
