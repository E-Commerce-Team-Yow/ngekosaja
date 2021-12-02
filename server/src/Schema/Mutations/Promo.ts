import { GraphQLInt, GraphQLNonNull, GraphQLString } from "graphql";
import { MessageType } from "../TypeDefs/Messages";
import {getConnection} from "typeorm";

export const ADD_PROMO = {
  type: MessageType,
  args: {
    nama: { type: GraphQLNonNull(GraphQLString) },
    tanggal_mulai: { type: GraphQLNonNull(GraphQLString) },
    tanggal_akhir: { type: GraphQLNonNull(GraphQLString) },
    deskripsi: { type: GraphQLString },
    jenis_promo: { type: GraphQLNonNull(GraphQLInt) },
    besaran: { type: GraphQLNonNull(GraphQLInt) }
  },

  async resolve(parent: any, args: any) {
    const { nama, tanggal_mulai, tanggal_akhir, deskripsi, jenis_promo, besaran} = args;
    let kode;
    let countPro = await getConnection()
    .createQueryBuilder()
    .select("count(*)", "count")
    .from("promo", "")
    .getRawOne();
    let tmp = parseInt(countPro.count) + 1;
    if(tmp < 10){
      kode = 'PR00' + tmp; 
    }else if(tmp < 100){
      kode = 'PR0' + tmp; 
    }else{
      kode = 'PR' + tmp; 
    }

    await getConnection()
    .createQueryBuilder()
    .insert()
    .into("promo")
    .values([
        { id: kode, nama: nama, tanggal_mulai: new Date(tanggal_mulai), tanggal_akhir: new Date(tanggal_akhir), deskripsi: deskripsi, jenis_promo: jenis_promo, besaran: besaran, status: 1 }, 
     ])
    .execute();
     return {id: kode, successful: true, message: "Berhasil menambahkan promo"}
  },
};