import { GraphQLNonNull, GraphQLString } from "graphql";
import { MessageType } from "../TypeDefs/Messages";
import {getConnection} from "typeorm";
import { FasilitaskosType } from "../TypeDefs/Fasilitas_kos";
import { Fasilitas_kos } from "../../Entities/Fasilitas_kos";

export const ADD_FASILITAS_KOS = {
  type: MessageType,
  args: {
    nama: { type: GraphQLNonNull(GraphQLString) },
    keterangan: { type: GraphQLNonNull(GraphQLString) }
  },

  async resolve(parent: any, args: any) {
    const { nama, keterangan} = args;
    let kode;
    let countFas = await getConnection()
    .createQueryBuilder()
    .select("count(*)", "count")
    .from("fasilitas_kos", "")
    .getRawOne();
    let tmp = parseInt(countFas.count) + 1;
    if(tmp < 10){
      kode = 'F00' + tmp; 
    }else if(tmp < 100){
      kode = 'F0' + tmp; 
    }else{
      kode = 'F' + tmp; 
    }

    await getConnection()
    .createQueryBuilder()
    .insert()
    .into("fasilitas_kos")
    .values([
        { id: kode, nama: nama, keterangan: keterangan, status: 1}, 
     ])
    .execute();
     return {id: kode, successful: true, message: "Berhasil menambahkan fasilitas kos "}
  },
};

export const UPDATE_FASILITAS_KOS = {
  type: FasilitaskosType,
  args: {
    id: { type: GraphQLNonNull(GraphQLString) },
    nama: { type: GraphQLNonNull(GraphQLString) },
    keterangan: { type: GraphQLNonNull(GraphQLString) },
  },

  async resolve(parent: any, args: any) {
    const { id, nama, keterangan } = args;

    await getConnection()
    .createQueryBuilder()
    .update('fasilitas_kos')
    .set({ nama: nama, keterangan: keterangan })
    .where("id = :id", { id: id })
    .execute()

    return {id: id, successful: true, message: "Berhasil mengubah fasilitas kos"}
  },
};

export const DELRES_FASILITAS = {
  type: FasilitaskosType,
  args: {
    id: { type: GraphQLNonNull(GraphQLString) },
  },

  async resolve(parent: any, args: any) {
    const { id } = args;

    const stat = await getConnection()      
    .createQueryBuilder()      
    .select("fasilitas_kos.status")      
    .from(Fasilitas_kos, "fasilitas_kos")      
    .where("id = :id", { id: id })      
    .getOne();
    console.log(stat?.status);
    if(stat?.status == 1){
      await getConnection()
      .createQueryBuilder()
      .update('fasilitas_kos')
      .set({ status: 0,})
      .where("id = :id", { id: id })
      .execute()
      return {id: id, successful: true, message: "Berhasil melarang fasilitas"}
    }else{
      await getConnection()
      .createQueryBuilder()
      .update('fasilitas_kos')
      .set({ status: 1,})
      .where("id = :id", { id: id })
      .execute()
      return {id: id, successful: true, message: "Berhasil mengembalikan fasilitas"}
    }
  },
};