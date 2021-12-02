import { GraphQLList, GraphQLNonNull, GraphQLString } from "graphql";
import {getConnection} from "typeorm";
import { Listing } from "../../Entities/Listing";
import { Promo } from "../../Entities/Promo";
import { PromoType } from "../TypeDefs/Promo";

export const GET_ALL_PROMO = {
  type: new GraphQLList(PromoType),
  args: {
    search: { type: GraphQLString },
  },
  async resolve(parent: any, args: any) {
    const {search} = args;
    if(search){
      const promo = await getConnection()      
      .createQueryBuilder()      
      .select("promo")      
      .from(Promo, "promo")      
      .where("nama LIKE :search", { search:`%${search}%` })      
      .getMany();
      return promo;
    }else{
      const promo = await getConnection()
      .getRepository(Promo)
      .createQueryBuilder("promo")
      .getMany();
      return promo;
    }
  },
};