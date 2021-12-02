import { GraphQLInt, GraphQLNonNull, GraphQLString } from "graphql";
import { UserType } from "../TypeDefs/User";
import { MessageType } from "../TypeDefs/Messages";
//import { Wishlist } from "../../Entities/Wishlist";
import {getConnection} from "typeorm";
import { User } from "../../Entities/User";

export const CREATE_USER = {
  type: MessageType,
  args: {
    email: { type: GraphQLNonNull(GraphQLString) },
    nama_depan: { type: GraphQLNonNull(GraphQLString) },
    nama_belakang: { type: GraphQLNonNull(GraphQLString) },
    password: { type: GraphQLNonNull(GraphQLString) },
    // nik: { type: GraphQLNonNull(GraphQLString) },
    no_tlp: { type: GraphQLNonNull(GraphQLString) },
    // no_rek: { type: GraphQLString },
    // jenis_kelamin: { type: GraphQLNonNull(GraphQLString) },
    id_role : { type: GraphQLNonNull(GraphQLInt)},
    // foto_ktp: { type: GraphQLNonNull(GraphQLString) },
    // foto: { type: GraphQLString },
    created_at : { type : GraphQLString}
  },

  async resolve(parent: any, args: any) {
    const { email, nama_depan, nama_belakang, password, nik, no_tlp, no_rek, jenis_kelamin, foto_ktp, foto, id_role} = args;
    let kode;
    let countUser = await getConnection()
    .createQueryBuilder()
    .select("count(*)", "count")
    .from("user", "")
    .getRawOne();
    let tmp = parseInt(countUser.count) + 1;
    if(tmp < 10){
      kode = 'U'+ nama_depan.substring(0,1).toUpperCase() + nama_belakang.substring(0,1).toUpperCase() +'00' + tmp; 
    }else if(tmp < 100){
      kode = 'C'+ nama_depan.substring(0,1).toUpperCase() + nama_belakang.substring(0,1).toUpperCase() + '0' + tmp; 
    }else{
      kode = 'C'+ nama_depan.substring(0,1).toUpperCase() + nama_belakang.substring(0,1).toUpperCase() + tmp; 
    } 


    //created at
    var currentdate = new Date(); 
    var datetime = currentdate.getFullYear() + "-"
                + (currentdate.getMonth()+1)  + "-" 
                + currentdate.getDate() + " "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
    await getConnection()
    .createQueryBuilder()
    .insert()
    .into("user")
    .values([
        { id: kode, email: email, nama_depan: nama_depan, nama_belakang: nama_belakang, password: password,
          nik: nik, no_tlp: no_tlp, no_rek: no_rek, jenis_kelamin: jenis_kelamin, foto_ktp: foto_ktp, foto: foto, role: id_role, status: 1, created_at : datetime }, 
     ])
    .execute();
     return {id: kode, successful: true, message: "Berhasil menambahkan user"}
  },
};

export const UPDATE_USER = {
  type: UserType,
  args: {
    id: { type: GraphQLNonNull(GraphQLString) },
    nama_depan: { type: GraphQLNonNull(GraphQLString) },
    nama_belakang: { type: GraphQLNonNull(GraphQLString) },
    nik : { type: GraphQLString},
    no_tlp : {type: GraphQLNonNull(GraphQLString)},
    no_rek : {type : GraphQLString},
   // password : {type: GraphQLNonNull(GraphQLString)},

  },

  async resolve(parent: any, args: any) {
     const { id, nama_depan, nama_belakang, no_tlp, no_rek, nik} = args;
    //const { id, nama_depan, nama_belakang} = args;

   await getConnection()
    .createQueryBuilder()
    .update('user')
    .set({ nama_depan: nama_depan, nama_belakang: nama_belakang, no_tlp: no_tlp, no_rek : no_rek, nik:nik})
    .where("id = :id", { id: id })
    .execute()

    const user = await getConnection()      
    .createQueryBuilder()      
    .select("user")      
    .from(User, "user")    
    .leftJoinAndSelect("user.role","role")     
    .where("user.id = :id", { id: id})      
    .getOne();

    console.log(user);

    return user
  },
};

export const LOGIN_USER = {
  type: UserType,
  args:{
    email: { type: GraphQLNonNull(GraphQLString) },
    password: { type: GraphQLNonNull(GraphQLString) }
  },
  async resolve(parent: any, args: any) {
    const { email } = args;
    const { password } = args;

    const user = await getConnection()      
    .createQueryBuilder()      
    .select("user")      
    .from(User, "user")    
    .leftJoinAndSelect("user.role","role")     
    .where("email = :email and password = :password", { email: email, password: password })      
    .getOne();
    return user;
  },
};

export const DELRES_USER = {
  type: UserType,
  args: {
    id: { type: GraphQLNonNull(GraphQLString) },
  },

  async resolve(parent: any, args: any) {
    const { id } = args;

    const stat = await getConnection()      
    .createQueryBuilder()      
    .select("user.status")      
    .from(User, "user")
    .where("id = :id", { id: id })      
    .getOne();
    console.log(stat?.status);
    if(stat?.status == 1){
      await getConnection()
      .createQueryBuilder()
      .update('user')
      .set({ status: 0,})
      .where("id = :id", { id: id })
      .execute()
      return {id: id, successful: true, message: "Berhasil melarang user"}
    }else{
      await getConnection()
      .createQueryBuilder()
      .update('user')
      .set({ status: 1,})
      .where("id = :id", { id: id })
      .execute()
      return {id: id, successful: true, message: "Berhasil mengembalikan user"}
    }
  },
};

// export const UPDATE_PASSWORD = {
//   type: MessageType,
//   args: {
//     username: { type: GraphQLString },
//     oldPassword: { type: GraphQLString },
//     newPassword: { type: GraphQLString },
//   },
//   async resolve(parent: any, args: any) {
//     const { username, oldPassword, newPassword } = args;
//     const user = await Users.findOne({ username: username });

//     if (!user) {
//       throw new Error("USERNAME DOESNT EXIST");
//     }
//     const userPassword = user?.password;

//     if (oldPassword === userPassword) {
//       await Users.update({ username: username }, { password: newPassword });

//       return { successful: true, message: "PASSWORD UPDATED" };
//     } else {
//       throw new Error("PASSWORDS DO NOT MATCH!");
//     }
//   },
// };

// export const DELETE_USER = {
//   type: MessageType,
//   args: {
//     id: { type: GraphQLID },
//   },
//   async resolve(parent: any, args: any) {
//     const id = args.id;
//     await Users.delete(id);

//     return { successful: true, message: "DELETE WORKED" };
//   },
// };
