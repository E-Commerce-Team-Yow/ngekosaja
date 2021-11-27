import { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLInt, GraphQLBoolean, GraphQLNonNull, GraphQLList } from "graphql";

export const KotaType = new GraphQLObjectType({
  name: "kota",
  description: "Tabel Kota di Indonesia",
  fields: () => ({
    id: { type: GraphQLInt },
    nama: { type: GraphQLString },
  }),
});