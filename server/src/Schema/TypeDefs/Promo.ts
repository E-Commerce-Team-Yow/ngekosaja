import { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLList, GraphQLBoolean } from "graphql";


export const PromoType = new GraphQLObjectType({
  name: "Promo",
  description: "Tabel Promo",
  fields: () => ({
    id: { type: GraphQLString },
    nama: { type: GraphQLString },
    tanggal_mulai: { type: GraphQLString },
    tanggal_akhir: { type: GraphQLString },
    deskripsi: { type: GraphQLString },
    jenis_promo: { type: GraphQLInt },
    besaran: { type: GraphQLInt },
    status: { type: GraphQLInt },
    successful: { type: GraphQLBoolean },
    message: { type: GraphQLString },
  }),
});