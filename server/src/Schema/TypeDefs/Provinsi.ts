import { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLInt, GraphQLBoolean, GraphQLNonNull, GraphQLList } from "graphql";

export const ProvinsiType = new GraphQLObjectType({
  name: "provinsi",
  description: "Tabel Provinsi di Indonesia",
  fields: () => ({
    id: { type: GraphQLInt },
    nama: { type: GraphQLString },
    status: {type: GraphQLInt}
  }),
});
