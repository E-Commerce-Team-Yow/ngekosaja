import { GraphQLList, GraphQLNonNull, GraphQLString } from "graphql";
import {getConnection} from "typeorm";
import { Fasilitas_kos } from "../../Entities/Fasilitas_kos";
import { FasilitaskosType } from "../TypeDefs/Fasilitas_kos";

export const GET_ALL_FASILITAS_KOS = {
  type: new GraphQLList(FasilitaskosType),
  args: {
    search: { type: GraphQLString },
  },
  async resolve(parent: any, args: any) {
    const {search} = args;
    if(search){
      const fas_kos = await getConnection()      
      .createQueryBuilder()      
      .select("fasilitas_kos")      
      .from(Fasilitas_kos, "fasilitas_kos")      
      .where("nama LIKE :search", { search:`%${search}%` })      
      .getMany();
      return fas_kos;
    }else{
      const fas_kos = await getConnection()
      .getRepository(Fasilitas_kos)
      .createQueryBuilder("fasilitas_kos")
      .leftJoinAndSelect("fasilitas_kos.listings", "listings")
      .getMany();
      return fas_kos;

    }
  },
};

export const GET_ONE_FASILITAS_KOS = {
  type: FasilitaskosType,
  args:{
    id: { type: GraphQLNonNull(GraphQLString) }
  },
  async resolve(parent: any, args: any) {
    const { id } = args;

    const fas_kos = await getConnection()      
    .createQueryBuilder()      
    .select("fasilitas_kos")      
    .from(Fasilitas_kos, "fasilitas_kos")      
    .where("id = :id", { id: id })      
    .getOne();
    return fas_kos;
  },
};