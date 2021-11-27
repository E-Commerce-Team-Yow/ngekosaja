import { BaseEntity, Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

import { User } from "./User";

@Entity()
export class Role extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  nama !: string;

  @OneToMany(() => User, user => user.role)
  user!: User[];

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
