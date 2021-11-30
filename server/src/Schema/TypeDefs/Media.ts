import { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLInt, GraphQLBoolean, GraphQLNonNull, GraphQLList } from "graphql";
import { ListingType } from "./Listing";

export const MediaType = new GraphQLObjectType({
    name: "media",
    description: "Tabel Media",
    fields: () => ({
      id: { type: GraphQLString },
      path: { type: GraphQLString },
      status: { type: GraphQLInt },
      successful: { type: GraphQLBoolean },
      message: { type: GraphQLString },
      listings:{
        type: GraphQLList(ListingType)
      },
      count: { type: GraphQLInt },
    }),
  });