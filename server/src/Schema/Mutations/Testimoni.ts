import { GraphQLNonNull, GraphQLString } from "graphql";
import { MessageType } from "../TypeDefs/Messages";
import {getConnection} from "typeorm";
import { TestimoniType } from "../TypeDefs/Testimoni";
import { Testimoni } from "../../Entities/Testimoni";

export const ADD_TESTIMONI = {
  type: MessageType,
  args: {
    isi: { type: GraphQLNonNull(GraphQLString) },
    id_user: { type: GraphQLNonNull(GraphQLString) },
    id_rumah_kos: { type: GraphQLNonNull(GraphQLString) },
  },

  async resolve(parent: any, args: any) {
    const { isi, id_user, id_rumah_kos} = args;
    let kode;
    let countTesti = await getConnection()
    .createQueryBuilder()
    .select("count(*)", "count")
    .from("testimoni", "")
    .getRawOne();
    let tmp = parseInt(countTesti.count) + 1;
    if(tmp < 10){
      kode = 'T00' + tmp; 
    }else if(tmp < 100){
      kode = 'T0' + tmp; 
    }else{
      kode = 'T' + tmp; 
    }

    await getConnection()
    .createQueryBuilder()
    .insert()
    .into("testimoni")
    .values([
        { id: kode, isi: isi, user: id_user, rumah_kos: id_rumah_kos, status: 1}, 
     ])
    .execute();
     return {id: kode, successful: true, message: "Berhasil menambahkan testimoni"}
  },
};

export const DELRES_TESTIMONI = {
  type: TestimoniType,
  args: {
    id: { type: GraphQLNonNull(GraphQLString) },
  },

  async resolve(parent: any, args: any) {
    const { id } = args;

    const stat = await getConnection()      
    .createQueryBuilder()      
    .select("testimoni.status")      
    .from(Testimoni, "testimoni")      
    .where("id = :id", { id: id })      
    .getOne();
    console.log(stat?.status);
    if(stat?.status == 1){
      await getConnection()
      .createQueryBuilder()
      .update('testimoni')
      .set({ status: 0,})
      .where("id = :id", { id: id })
      .execute()
      return {id: id, successful: true, message: "Berhasil melarang testimoni"}
    }else{
      await getConnection()
      .createQueryBuilder()
      .update('testimoni')
      .set({ status: 1,})
      .where("id = :id", { id: id })
      .execute()
      return {id: id, successful: true, message: "Berhasil mengembalikan testimoni"}
    }
  },
};