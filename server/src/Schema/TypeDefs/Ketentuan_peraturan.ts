import { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLBoolean } from "graphql";

export const KeperType = new GraphQLObjectType({
  name: "ketentuan_peraturan",
  description: "Tabel Ketentuan dan Peraturan Kamar Kos",
  fields: () => ({
    id: { type: GraphQLString },
    isi: { type: GraphQLString },
    tipe: { type: GraphQLInt },
    id_listing: {type: GraphQLString},
    status: { type: GraphQLInt },
    successful: { type: GraphQLBoolean },
    message: { type: GraphQLString },
  }),
});
