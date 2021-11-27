import { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLInt, GraphQLBoolean, GraphQLNonNull, GraphQLList } from "graphql";
import { UserType } from "./User";

export const RoleType = new GraphQLObjectType({
  name: "role",
  description: "Tabel Role User",
  fields: () => ({
    id: { type: GraphQLInt },
    nama: { type: GraphQLString },
    status: { type: GraphQLInt },
    // users:{
    //   type: GraphQLList(UserType)
    // }
  }),
});
