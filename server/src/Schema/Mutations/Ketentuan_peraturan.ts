import { GraphQLInt, GraphQLNonNull, GraphQLString } from "graphql";
import { MessageType } from "../TypeDefs/Messages";
import {getConnection} from "typeorm";
import { KeperType } from "../TypeDefs/Ketentuan_peraturan";
import { Ketentuan_peraturan } from "../../Entities/Ketentuan_peraturan";

export const ADD_KETENTUAN_PERATURAN = {
  type: MessageType,
  args: {
    isi: { type: GraphQLNonNull(GraphQLString) },
    tipe: { type: GraphQLNonNull(GraphQLInt) },
    id_listing: { type: GraphQLNonNull(GraphQLString) },
  },

  async resolve(parent: any, args: any) {
    const { isi, tipe, id_listing} = args;
    let kode;
    let countKeper = await getConnection()
    .createQueryBuilder()
    .select("count(*)", "count")
    .from("ketentuan_peraturan", "")
    .getRawOne();
    let tmp = parseInt(countKeper.count) + 1;
    if(tmp < 10){
      kode = 'KP00' + tmp; 
    }else if(tmp < 100){
      kode = 'KP0' + tmp; 
    }else{
      kode = 'KP' + tmp; 
    }

    await getConnection()
    .createQueryBuilder()
    .insert()
    .into("ketentuan_peraturan")
    .values([
        { id: kode, isi: isi, tipe: tipe, listing: id_listing, status: 1}, 
     ])
    .execute();
     return {id: kode, successful: true, message: "Berhasil menambahkan ketentuan / peraturan kos baru"}
  },
};

export const DELRES_KEPER = {
  type: KeperType,
  args: {
    id: { type: GraphQLNonNull(GraphQLString) },
  },

  async resolve(parent: any, args: any) {
    const { id } = args;

    const stat = await getConnection()      
    .createQueryBuilder()      
    .select("ketentuan_peraturan.status")      
    .from(Ketentuan_peraturan, "ketentuan_peraturan")      
    .where("id = :id", { id: id })      
    .getOne();
    console.log(stat?.status);
    if(stat?.status == 1){
      await getConnection()
      .createQueryBuilder()
      .update('ketentuan_peraturan')
      .set({ status: 0,})
      .where("id = :id", { id: id })
      .execute()
      return {id: id, successful: true, message: "Berhasil melarang ketentuan_peraturan"}
    }else{
      await getConnection()
      .createQueryBuilder()
      .update('ketentuan_peraturan')
      .set({ status: 1,})
      .where("id = :id", { id: id })
      .execute()
      return {id: id, successful: true, message: "Berhasil mengembalikan ketentuan_peraturan"}
    }
  },
};