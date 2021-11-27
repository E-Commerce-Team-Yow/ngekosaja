import { BaseEntity, Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { Penyewaan } from "./Penyewaan";
import { User } from "./User";

@Entity()
export class Tagihan extends BaseEntity {
  @PrimaryColumn()
  id!: string;

  @ManyToOne(() => User, user => user.tagihan)
  user !: User;

  @Column({
      type : 'timestamp',
      nullable : true
  })
  jatuh_tempo !: Date;


  @Column({
      type : 'timestamp',
      nullable : true
  })
  tanggal_pembayaran !: Date;

  @Column()
  butkti_pembayaran !: string;

  @ManyToOne(() => User, user => user.tagihan_approval)
  user_approval !: User;

  @Column()
  nominal !: number;

  @Column()
  menggunakan !: number;

  @ManyToOne(() => Penyewaan, penyewaan => penyewaan.tagihan)
  penyewaan !: Penyewaan;

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
