import { BaseEntity, Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import { Tagihan } from "./Tagihan";
import { User } from "./User";

@Entity()
export class Penyewaan extends BaseEntity {
  @PrimaryColumn()
  id!: string;

  @ManyToOne(() => User, user => user.penyewaan )
  user !: User;

  @ManyToOne(() => User, user => user.penyewaan_user_approval)
  user_approval !: User;
  
  @OneToMany(() => Tagihan, tagihan => tagihan.penyewaan)
  tagihan !: Tagihan [];

  @Column()
  status_pembayaran!: number;

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
    status !: number;

  
}
