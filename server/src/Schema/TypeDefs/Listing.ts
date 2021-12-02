import { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLList, GraphQLBoolean } from "graphql";
import { FasilitaskosType } from "./Fasilitas_kos";

export const ListingType = new GraphQLObjectType({
  name: "Listing",
  description: "Tabel Listing",
  fields: () => ({
    id: { type: GraphQLString },
    nama: { type: GraphQLString },
    jenis: { type: GraphQLInt },
    harga_bulanan: { type: GraphQLInt },
    harga_tahunan: { type: GraphQLInt },
    panjang: { type: GraphQLInt },
    lebar: { type: GraphQLInt },
    keterangan: { type: GraphQLString },
    status: { type: GraphQLInt },
    successful: { type: GraphQLBoolean },
    message: { type: GraphQLString },
    fasilitas_koss:{
      type: GraphQLList(FasilitaskosType)
    }
  }),
});