import { GraphQLList, GraphQLNonNull, GraphQLString } from "graphql";
import {getConnection} from "typeorm";
import { Role } from "../../Entities/Role";
import { RoleType } from "../TypeDefs/Role";

export const GET_ALL_ROLE = {
  type: new GraphQLList(RoleType),
  
  async resolve() {
    const role = await getConnection()
    .getRepository(Role)
    .createQueryBuilder("role")
    .getMany();
    return role;
  },
};


