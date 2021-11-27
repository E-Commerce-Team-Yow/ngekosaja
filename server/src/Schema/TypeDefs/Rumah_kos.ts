import { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLInt, GraphQLBoolean, GraphQLNonNull, GraphQLList } from "graphql";
import { ListingType } from "./Listing";

export const RumahkosType = new GraphQLObjectType({
  name: "rumah_kos",
  description: "Tabel Pemilik Kos",
  fields: () => ({
    id: { type: GraphQLString },
    id_user: { type: GraphQLString },
    nama: { type: GraphQLString },
    alamat: { type: GraphQLString },
    kota: { type: GraphQLString },
    provinsi: { type: GraphQLString },
    kode_pos: { type: GraphQLString },
    total_kamar: { type: GraphQLInt },
    sisa_kamar: { type: GraphQLInt },
    status: { type: GraphQLInt },
    successful: { type: GraphQLBoolean },
    message: { type: GraphQLString },
    listingRumahKos:{
      type: GraphQLList(ListingType)
    }
  }),
});
