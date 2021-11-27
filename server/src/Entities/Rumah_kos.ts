import { BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import { Kota } from "./Kota";
import { Listing } from "./Listing";
import { Testimoni } from "./Testimoni";
import { User } from "./User";

@Entity()
export class Rumah_kos extends BaseEntity {
  @PrimaryColumn()
  id!: string;

  @ManyToOne(() => User, user => user.rumah_kos)
  user!: User;

  @OneToMany(() => Testimoni, testimoni => testimoni.rumah_kos)
  testiRumahKos!: Testimoni[];

  @OneToMany(() => Listing, listing => listing.rumah_kos)
  listingRumahKos!: Listing[];

  @ManyToOne(() => Kota, kota => kota.rumah_kos)
  kota!: Kota;

  @Column()
  nama!: string;

  @Column()
  alamat!: string;

  @Column()
  provinsi!: string;

  @Column()
  kode_pos!: string;

  @Column()
  total_kamar!: number;

  @Column()
  sisa_kamar!: number;

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
