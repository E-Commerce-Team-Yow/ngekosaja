import { GraphQLList, GraphQLString, GraphQLNonNull } from "graphql";
import {getConnection} from "typeorm";
import { Ketentuan_peraturan } from "../../Entities/Ketentuan_peraturan";
import { KeperType } from "../TypeDefs/Ketentuan_peraturan";

export const GET_ALL_KEPER = {
  type: new GraphQLList(KeperType),
  args: {
    search: { type: GraphQLString },
  },
  async resolve(parent: any, args: any) {
    const {search} = args;
    if(search){
      const keper = await getConnection()      
      .createQueryBuilder()      
      .select("ketentuan_peraturan")      
      .from(Ketentuan_peraturan, "ketentuan_peraturan")      
      .where("isi LIKE :search", { search:`%${search}%` })      
      .getMany();
      return keper;
    }else{
    const keper = await getConnection()
    .getRepository(Ketentuan_peraturan)
    .createQueryBuilder("ketentuan_peraturan")
    .getMany();
    return keper;
    }
  },
};
export const GET_ONE_KEPER = {
  type: KeperType,
  args:{
    id: { type: GraphQLNonNull(GraphQLString) }
  },
  async resolve(parent: any, args: any) {
    const { id } = args;

    const fas_kos = await getConnection()      
    .createQueryBuilder()      
    .select("ketentuan_peraturan")      
    .from(Ketentuan_peraturan, "ketentuan_peraturan")      
    .where("id = :id", { id: id })      
    .getOne();
    return fas_kos;
  },
};