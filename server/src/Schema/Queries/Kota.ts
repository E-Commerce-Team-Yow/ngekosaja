import { GraphQLList, GraphQLNonNull, GraphQLString } from "graphql";
import {getConnection} from "typeorm";
import { Kota } from "../../Entities/Kota";
import { Listing } from "../../Entities/Listing";
import { KotaType } from "../TypeDefs/Kota";

export const GET_ALL_KOTA = {
  type: new GraphQLList(KotaType),
  args: {
    search: { type: GraphQLString },
  },
  async resolve(parent: any, args: any) {
    const {search} = args;
    if(search){
      const kota = await getConnection()      
      .createQueryBuilder()      
      .select("kota")      
      .from(Kota, "kota")      
      .where("nama LIKE :search LIMIT 3", { search:`%${search}%` })      
      .getMany();
      return kota;
    }else{
      const kota = await getConnection()
      .createQueryBuilder()      
      .select("kota")      
      .from(Kota, "kota")         
      .getMany();
      return kota;
    }
  },
};