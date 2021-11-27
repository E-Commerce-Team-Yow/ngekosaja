import { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLInt, GraphQLBoolean, GraphQLNonNull, GraphQLList } from "graphql";
import { ListingType } from "./Listing";

export const FasilitaskosType = new GraphQLObjectType({
  name: "fasilitas_kos",
  description: "Tabel Fasilitas Kos",
  fields: () => ({
    id: { type: GraphQLString },
    nama: { type: GraphQLString },
    keterangan: { type: GraphQLString },
    status: { type: GraphQLInt },
    successful: { type: GraphQLBoolean },
    message: { type: GraphQLString },
    listings:{
      type: GraphQLList(ListingType)
    }
  }),
});
