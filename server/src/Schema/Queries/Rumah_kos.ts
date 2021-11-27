import { GraphQLList, GraphQLNonNull, GraphQLString } from "graphql";
import {getConnection} from "typeorm";
import { Rumah_kos } from "../../Entities/Rumah_kos";
import { RumahkosType } from "../TypeDefs/Rumah_kos";

export const GET_ALL_RUMAH_KOS = {
  type: new GraphQLList(RumahkosType),
  args: {
    search: { type: GraphQLString },
  },
  async resolve(parent: any, args: any) {
    const {search} = args;
    if(search){
      const rmh_kos = await getConnection()      
      .createQueryBuilder()      
      .select("rumah_kos")      
      .from(Rumah_kos, "rumah_kos")      
      .where("alamat LIKE :search", { search:`%${search}%` })
      .orWhere("kota LIKE :search", { search:`%${search}%` })      
      .getMany();
      return rmh_kos;
    }else{
      const rmh_kos = await getConnection()
      .getRepository(Rumah_kos)
      .createQueryBuilder("rumah_kos")
      .leftJoinAndSelect("rumah_kos.listingRumahKos", "listingRumahKos")
      .getMany();
      return rmh_kos;
    }
  },
};

export const GET_ONE_RUMAH_KOS = {
  type: new GraphQLList(RumahkosType),
  args:{
    id: { type: GraphQLNonNull(GraphQLString) }
  },
  async resolve(parent: any, args: any) {
    const { id } = args;

    const rmhkos = await getConnection()
    .createQueryBuilder()      
    .select("rumah_kos")      
    .from(Rumah_kos, "rumah_kos")      
    .where("id = :id", { id: id })      
    .getOne();
    return rmhkos
  },
};