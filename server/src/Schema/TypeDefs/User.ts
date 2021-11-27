import { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLBoolean, GraphQLList } from "graphql";
import { RumahkosType } from "./Rumah_kos";
import { RoleType } from "./Role";

export const UserType = new GraphQLObjectType({
  name: "user",
  description: "Tabel User",
  fields: () => ({
    id: { type: GraphQLString },
    email: { type: GraphQLString },
    nama_depan: { type: GraphQLString },
    nama_belakang: { type: GraphQLString },
    password: { type: GraphQLString },
    nik: { type: GraphQLString },
    no_tlp: { type: GraphQLString },
    no_rek: { type: GraphQLString },
    jenis_kelamin: { type: GraphQLString },
    foto_ktp: { type: GraphQLString },
    foto: { type: GraphQLString },
    status: { type: GraphQLInt },
    successful: { type: GraphQLBoolean },
    message: { type: GraphQLString },
    count: {type: GraphQLInt},
    rumah_kos:{
      type: GraphQLList(RumahkosType)
    },
    role : {
      type: RoleType
    }
  }),
});
