import { BaseEntity, Column, Entity, OneToMany, PrimaryColumn, ManyToOne } from "typeorm";
import { Penyewaan } from "./Penyewaan";
import { Role } from "./Role";
import { Rumah_kos } from "./Rumah_kos";
import { Tagihan } from "./Tagihan";
import { Testimoni } from "./Testimoni";

@Entity()
export class User extends BaseEntity {
  @PrimaryColumn()
  id!: string;

  @Column()
  email!: string;

  @Column()
  nama_depan!: string;

  @Column()
  nama_belakang!: string;

  @Column()
  password!: string;

  @ManyToOne(() => Role, role => role.user)
  role!: Role;

  @OneToMany(() => Rumah_kos, rumah_kos => rumah_kos.user)
  rumah_kos!: Rumah_kos[];

  @OneToMany(() => Penyewaan, penyewaan => penyewaan.user )
  penyewaan !: Penyewaan [];

  @OneToMany(() => Penyewaan, penyewaan => penyewaan.user_approval)
  penyewaan_user_approval !: Penyewaan [];

  @OneToMany(() => Tagihan, tagihan => tagihan.user)
  tagihan !: Tagihan [];

  @OneToMany(() => Tagihan, tagihan => tagihan.user_approval)
  tagihan_approval !: Tagihan [];

  @OneToMany(() => Testimoni, testimoni => testimoni.user)
  testimoniUser!: Testimoni[];

  @Column()
  nik!: string;

  @Column()
  no_tlp!: string;

  @Column()
  no_rek!: string;

  @Column()
  jenis_kelamin!: string;

  @Column()
  foto_ktp!: string;

  @Column()
  foto!: string;


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
