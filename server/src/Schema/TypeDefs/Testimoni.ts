import { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLBoolean } from "graphql";

export const TestimoniType = new GraphQLObjectType({
  name: "testimoni",
  description: "Tabel Testimoni Penghuni Kos",
  fields: () => ({
    id: { type: GraphQLString },
    isi: { type: GraphQLString },
    status: { type: GraphQLInt },
    successful: { type: GraphQLBoolean },
    message: { type: GraphQLString },
  }),
});