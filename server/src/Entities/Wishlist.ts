import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Wishlist extends BaseEntity{
    @Column() 
    id_user!: string;

    @Column()
    id_listing!: string;

    @Column()
    status!: number;
}