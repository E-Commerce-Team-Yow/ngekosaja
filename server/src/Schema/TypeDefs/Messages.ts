import { GraphQLObjectType, GraphQLString, GraphQLBoolean } from "graphql";

export const MessageType = new GraphQLObjectType({
  name: "Message",
  fields: () => ({
    id: { type: GraphQLString},
    successful: { type: GraphQLBoolean },
    message: { type: GraphQLString },
  }),
});
