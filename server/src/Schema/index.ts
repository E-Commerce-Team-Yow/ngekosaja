import { GraphQLInt, GraphQLObjectType, GraphQLScalarType, GraphQLSchema } from "graphql";
import { GET_ALL_USERS, GET_ONE_USER} from "./Queries/User";
import { CREATE_USER, DELRES_USER, UPDATE_USER, LOGIN_USER } from "./Mutations/User";
import { ADD_RUMAH_KOS, DELRES_RUMAH } from "./Mutations/Rumah_kos";
import { ADD_LISTING, APPEND_LISTING_FASILITAS_KOS, DELRES_LISTING } from "./Mutations/Listing";
import { ADD_KETENTUAN_PERATURAN, DELRES_KEPER } from "./Mutations/Ketentuan_peraturan";
import { ADD_FASILITAS_KOS, DELRES_FASILITAS, UPDATE_FASILITAS_KOS } from "./Mutations/Fasilitas_kos";
import { GET_ALL_LISTING } from "./Queries/Listing";
import { GET_ALL_FASILITAS_KOS, GET_ONE_FASILITAS_KOS } from "./Queries/Fasilitas_kos";
import { GET_ALL_RUMAH_KOS, GET_ONE_RUMAH_KOS } from "./Queries/Rumah_kos";
import { DELRES_TESTIMONI } from "./Mutations/Testimoni";
import { GET_ALL_KEPER } from "./Queries/Ketentuan_peraturan";
import { GET_ALL_TESTIMONI } from "./Queries/Testimoni";
import { GET_ALL_Role } from "./Queries/Role";
import { ADD_MEDIA, DELRES_MEDIA, UPDATE_MEDIA } from "./Mutations/Media";
import { GET_ALL_MEDIA, GET_ONE_MEDIA, } from "./Queries/Media";

const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    getAllUsers: GET_ALL_USERS,
    getOneUser: GET_ONE_USER,
    getAllListing: GET_ALL_LISTING,
    getAllFasilitasKos: GET_ALL_FASILITAS_KOS,
    getOneFasilitasKos: GET_ONE_FASILITAS_KOS,
    getAllKeper: GET_ALL_KEPER,
    getAllTestimoni: GET_ALL_TESTIMONI,
    getAllRumahKos: GET_ALL_RUMAH_KOS,
    getOneRumahKos: GET_ONE_RUMAH_KOS,
    getAllRole : GET_ALL_Role,
    //MEDIA
    getAllMedia: GET_ALL_MEDIA,
    getOneMedia: GET_ONE_MEDIA,
  },
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createUser: CREATE_USER,
    updateUser: UPDATE_USER,
    delresUser: DELRES_USER,
    loginUser: LOGIN_USER,

    addRumahKos: ADD_RUMAH_KOS,
    addListing: ADD_LISTING,
    addKeper: ADD_KETENTUAN_PERATURAN,
    addFasilitasKos: ADD_FASILITAS_KOS,
    updateFasilitasKos: UPDATE_FASILITAS_KOS,
    appendListFas: APPEND_LISTING_FASILITAS_KOS,
    
    delresRumah: DELRES_RUMAH,
    delresFasilitas: DELRES_FASILITAS,
    delresListing: DELRES_LISTING,
    delresKeper: DELRES_KEPER,
    delresTestimoni: DELRES_TESTIMONI,
    
    //deleteUser: DELETE_USER,
    //updatePassword: UPDATE_PASSWORD,

    //MEDIA
    addMedia: ADD_MEDIA,
    updateMedia: UPDATE_MEDIA,
    delresMedia: DELRES_MEDIA,
  },
});

export const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
