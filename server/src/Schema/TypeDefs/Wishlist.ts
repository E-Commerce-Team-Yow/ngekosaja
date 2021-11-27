import { GraphQLObjectType, GraphQLString, GraphQLInt } from "graphql";

export const WishlistType = new GraphQLObjectType({
  name: "wihlist",
  description: "Tabel Wishlist",
  fields: () => ({
    id_user: { type: GraphQLString },
    id_listing: { type: GraphQLString },
    status: { type: GraphQLInt },
  }),
});