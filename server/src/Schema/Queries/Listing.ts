import { GraphQLList, GraphQLNonNull, GraphQLString } from "graphql";
import {getConnection} from "typeorm";
import { Listing } from "../../Entities/Listing";
import { ListingType } from "../TypeDefs/Listing";

export const GET_ALL_LISTING = {
  type: new GraphQLList(ListingType),
  args: {
    search: { type: GraphQLString },
  },
  async resolve(parent: any, args: any) {
    const {search} = args;
    if(search){
      const listing = await getConnection()      
      .createQueryBuilder()      
      .select("listing")      
      .from(Listing, "listing")      
      .where("nama LIKE :search", { search:`%${search}%` })      
      .getMany();
      return listing;
    }else{
      const listing = await getConnection()
      .getRepository(Listing)
      .createQueryBuilder("listing")
      .leftJoinAndSelect("listing.fasilitas_koss", "fasilitas_koss")
      .getMany();
      console.log(listing);
      return listing;
    }
  },
};