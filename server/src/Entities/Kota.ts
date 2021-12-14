import { BaseEntity, Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Provinsi } from "./Provinsi";
import { Rumah_kos } from "./Rumah_kos";

@Entity()
export class Kota extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  nama !: string;

  @ManyToOne(() => Provinsi, provinsi => provinsi.kota)
  provinsi!: Provinsi;

  @OneToMany(() => Rumah_kos, rumah_kos => rumah_kos.kota)
  rumah_kos!: Rumah_kos;

}
