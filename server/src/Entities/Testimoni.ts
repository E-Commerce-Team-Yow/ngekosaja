import { BaseEntity, Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { Rumah_kos } from "./Rumah_kos";
import { User } from "./User";

@Entity()
export class Testimoni extends BaseEntity {
  @PrimaryColumn()
  id!: string;

  @Column()
  isi!: string;

  @ManyToOne(() => User, user => user.testimoniUser)
  user!: User[];

  @ManyToOne(() => Rumah_kos, rumah_kos => rumah_kos.testiRumahKos)
  rumah_kos!: Rumah_kos[];

  @Column()
  status!: number;

}
