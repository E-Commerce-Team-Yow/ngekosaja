import { BaseEntity, Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import { FasilitaskosType } from "../Schema/TypeDefs/Fasilitas_kos";
import { Fasilitas_kos } from "./Fasilitas_kos";
import { Ketentuan_peraturan } from "./Ketentuan_peraturan";
import { Media } from "./Media";
import { Rumah_kos } from "./Rumah_kos";

@Entity()
export class Listing extends BaseEntity {
  @PrimaryColumn()
  id!: string;

  @Column()
  nama!: string;

  @Column()
  jenis!: number;

  @Column()
  harga_bulanan!: number;

  @OneToMany(() => Media, media => media.listing)
  media!: Media [];

  @Column()
  harga_tahunan!: number;

  @Column()
  panjang!: number;

  @Column()
  lebar!: number;

  @ManyToOne(() => Rumah_kos, rumah_kos => rumah_kos.listingRumahKos)
  rumah_kos!: Rumah_kos[];

  @OneToMany(() => Ketentuan_peraturan, ketentuan_peraturan => ketentuan_peraturan.listing)
  ketentuan_peraturan!: Ketentuan_peraturan[];

  @ManyToMany(() => Fasilitas_kos)
  @JoinTable()
  fasilitas_koss!: Fasilitas_kos[];

  @Column()
  keterangan!: string;

  @Column()
  status!: number;
  
}
