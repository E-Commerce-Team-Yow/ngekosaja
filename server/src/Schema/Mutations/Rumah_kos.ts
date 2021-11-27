import { GraphQLInt, GraphQLNonNull, GraphQLString } from "graphql";
import { MessageType } from "../TypeDefs/Messages";
import {getConnection} from "typeorm";
import { Rumah_kos } from "../../Entities/Rumah_kos";
import { RumahkosType } from "../TypeDefs/Rumah_kos";

export const ADD_RUMAH_KOS = {
  type: MessageType,
  args: {
    id_user: { type: GraphQLNonNull(GraphQLString) },
    nama: { type: GraphQLNonNull(GraphQLString) },
    alamat: { type: GraphQLNonNull(GraphQLString) },
    kota: { type: GraphQLNonNull(GraphQLString) },
    provinsi: { type: GraphQLNonNull(GraphQLString) },
    kode_pos: { type: GraphQLNonNull(GraphQLString) },
    total_kamar: { type: GraphQLNonNull(GraphQLInt) },
    sisa_kamar: { type: GraphQLNonNull(GraphQLInt) },
  },

  async resolve(parent: any, args: any) {
    const { nama, alamat, kota, provinsi, kode_pos, total_kamar, sisa_kamar, id_user} = args;
    let kode;
    let countUser = await getConnection()
    .createQueryBuilder()
    .select("count(*)", "count")
    .from("rumah_kos", "")
    .getRawOne();
    let tmp = parseInt(countUser.count) + 1;
    if(tmp < 10){
      kode = 'R00' + tmp; 
    }else if(tmp < 100){
      kode = 'R0' + tmp; 
    }else{
      kode = 'R' + tmp; 
    }

    await getConnection()
    .createQueryBuilder()
    .insert()
    .into('rumah_kos')
    .values([
        { id: kode, nama: nama, alamat: alamat, kota: kota, provinsi: provinsi,
          kode_pos: kode_pos, total_kamar: total_kamar, sisa_kamar: sisa_kamar, user: id_user, status: 1}, 
     ])
    .execute();
     return {id: kode, successful: true, message: "Berhasil menambahkan rumah kos baru"}
  },
};

export const DELRES_RUMAH = {
  type: RumahkosType,
  args: {
    id: { type: GraphQLNonNull(GraphQLString) },
  },

  async resolve(parent: any, args: any) {
    const { id } = args;

    const stat = await getConnection()      
    .createQueryBuilder()      
    .select("rumah_kos.status")      
    .from(Rumah_kos, "rumah_kos")      
    .where("id = :id", { id: id })      
    .getOne();
    console.log(stat?.status);
    if(stat?.status == 1){
      await getConnection()
      .createQueryBuilder()
      .update('rumah_kos')
      .set({ status: 0,})
      .where("id = :id", { id: id })
      .execute()
      return {id: id, successful: true, message: "Berhasil melarang rumah_kos"}
    }else{
      await getConnection()
      .createQueryBuilder()
      .update('rumah_kos')
      .set({ status: 1,})
      .where("id = :id", { id: id })
      .execute()
      return {id: id, successful: true, message: "Berhasil mengembalikan rumah_kos"}
    }
  },
};