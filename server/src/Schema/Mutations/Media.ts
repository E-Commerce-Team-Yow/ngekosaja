import { GraphQLNonNull, GraphQLString } from "graphql";
import { MessageType } from "../TypeDefs/Messages";
import {getConnection} from "typeorm";
import { MediaType } from "../TypeDefs/Media";
import { Media } from "../../Entities/Media";

export const ADD_MEDIA = {
    type: MessageType,
  args: {
    path: { type: GraphQLNonNull(GraphQLString) },
  },

  async resolve(parent: any, args: any) {
    const { path} = args;
    let countMed = await getConnection()
    .createQueryBuilder()
    .select("count(*)", "count")
    .from("media", "")
    .getRawOne();
    countMed = parseInt(countMed.count) + 1;
    let kode = "M"+String(countMed).padStart(4, '0');

    await getConnection()
    .createQueryBuilder()
    .insert()
    .into("media")
    .values([
        { id: kode, path: path, status: 1}, 
     ])
    .execute();
     return {id: kode, successful: true, message: "Berhasil menambahkan media kontrak "}  
   },
}

export const UPDATE_MEDIA = {
    type: MediaType,
    args: {
        id: { type: GraphQLNonNull(GraphQLString) },
      path: { type: GraphQLNonNull(GraphQLString) },
    },
  
    async resolve(parent: any, args: any) {
      const { path, id } = args;
  
      await getConnection()
      .createQueryBuilder()
      .update('media')
      .set({ path: path })
      .where("id = :id", { id: id })
      .execute()
  
      return {id: id, successful: true, message: "Berhasil mengubah media kontrak"}
    },
};

export const DELRES_MEDIA = {
    type: MediaType,
    args: {
      id: { type: GraphQLNonNull(GraphQLString) },
    },
  
    async resolve(parent: any, args: any) {
      const { id } = args;
  
      const stat = await getConnection()      
      .createQueryBuilder()      
      .select("media.status")      
      .from(Media, "media")      
      .where("id = :id", { id: id })      
      .getOne();
      console.log(stat?.status);
      if(stat?.status == 1){
        await getConnection()
        .createQueryBuilder()
        .update('media')
        .set({ status: 0,})
        .where("id = :id", { id: id })
        .execute()
        return {id: id, successful: true, message: "Berhasil melarang media"}
      }else{
        await getConnection()
        .createQueryBuilder()
        .update('media')
        .set({ status: 1,})
        .where("id = :id", { id: id })
        .execute()
        return {id: id, successful: true, message: "Berhasil mengembalikan media"}
      }
    },
  };
