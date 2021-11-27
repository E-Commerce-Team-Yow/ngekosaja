import { GraphQLList } from "graphql";
import {getConnection} from "typeorm";
import { Testimoni } from "../../Entities/Testimoni";
import { TestimoniType } from "../TypeDefs/Testimoni";

export const GET_ALL_TESTIMONI = {
  type: new GraphQLList(TestimoniType),
  
  async resolve() {
    const testi = await getConnection()
    .getRepository(Testimoni)
    .createQueryBuilder("testimoni")
    .getMany();
    return testi;
  },
};