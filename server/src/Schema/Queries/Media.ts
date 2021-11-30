import { GraphQLList, GraphQLNonNull, GraphQLString } from "graphql";
import {getConnection} from "typeorm";
import { Media } from "../../Entities/Media";
import { MediaType } from "../TypeDefs/Media";


export const GET_ALL_MEDIA = {
    type: new GraphQLList(MediaType),
    
    async resolve() {
      const getMedia = await getConnection()
      .getRepository(Media)
      .createQueryBuilder("media")
      .leftJoinAndSelect("media.listing", "listing")
      .getMany();

      return getMedia;
    },
};

export const GET_ONE_MEDIA = {
    type: MediaType,
    args:{
      id: { type: GraphQLNonNull(GraphQLString) }
    },
    async resolve(parent: any, args: any) {
      const { id } = args;
  
      const getMedia = await getConnection()      
      .createQueryBuilder()      
      .select("media")      
      .from(Media, "media")      
      .where("id = :id", { id: id })      
      .getOne();
      return getMedia;
    },
  };

