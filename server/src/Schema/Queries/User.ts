import { GraphQLEnumType, GraphQLInputObjectType, GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLScalarType, GraphQLString } from "graphql";
import { UserType } from "../TypeDefs/User";
import {createQueryBuilder, getConnection} from "typeorm";
import { User } from "../../Entities/User";
import { createQuery } from "mysql2/typings/mysql/lib/Connection";

export const GET_ALL_USERS = {
  type: new GraphQLList(UserType),
  
  async resolve() {
    const user = await getConnection()
    .getRepository(User)
    .createQueryBuilder("user")
    .leftJoinAndSelect("user.role","role")
    .leftJoinAndSelect("user.rumah_kos", "rumah_kos")
    .getMany();
    return user;
  },
};



export const GET_ONE_USER = {
  type: UserType,
  args:{
    id: { type: GraphQLNonNull(GraphQLString) }
  },
  async resolve(parent: any, args: any) {
    const { id } = args;

    const user = await getConnection()      
    .createQueryBuilder()      
    .select("user")      
    .from(User, "user")      
    .where("id = :id", { id: id })      
    .getOne();
    return user;
  },
};

