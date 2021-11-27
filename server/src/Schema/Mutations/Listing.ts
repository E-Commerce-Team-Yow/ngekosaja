import { GraphQLInt, GraphQLNonNull, GraphQLString } from "graphql";
import { MessageType } from "../TypeDefs/Messages";
import {getConnection} from "typeorm";
import { Ketentuan_peraturan } from "../../Entities/Ketentuan_peraturan";
import { Listing } from "../../Entities/Listing";
import { ListingType } from "../TypeDefs/Listing";

export const ADD_LISTING = {
  type: MessageType,
  args: {
    nama: { type: GraphQLNonNull(GraphQLString) },
    jenis: { type: GraphQLNonNull(GraphQLInt) },
    harga_bulanan: { type: GraphQLNonNull(GraphQLInt) },
    harga_tahunan: { type: GraphQLNonNull(GraphQLInt) },
    panjang: { type: GraphQLNonNull(GraphQLInt) },
    lebar: { type: GraphQLNonNull(GraphQLInt) },
    keterangan: { type: GraphQLNonNull(GraphQLString) },
  },

  async resolve(parent: any, args: any) {
    const { nama, jenis, harga_bulanan, harga_tahunan, panjang, lebar, keterangan} = args;
    let kode;
    let countList = await getConnection()
    .createQueryBuilder()
    .select("count(*)", "count")
    .from("listing", "")
    .getRawOne();
    let tmp = parseInt(countList.count) + 1;
    if(tmp < 10){
      kode = 'L00' + tmp; 
    }else if(tmp < 100){
      kode = 'L0' + tmp; 
    }else{
      kode = 'L' + tmp; 
    }

    await getConnection()
    .createQueryBuilder()
    .insert()
    .into("listing")
    .values([
        { id: kode, nama: nama, jenis: jenis, harga_bulanan: harga_bulanan, harga_tahunan: harga_tahunan, panjang: panjang, lebar: lebar, keterangan: keterangan, status: 1}, 
     ])
    .execute();
     return {id: kode, successful: true, message: "Berhasil menambahkan listing kos baru"}
  },
};

export const APPEND_LISTING_FASILITAS_KOS = {
  type: MessageType,
  args: {
    id_listing: { type: GraphQLNonNull(GraphQLString) },
    id_fasilitas_kos: { type: GraphQLNonNull(GraphQLString) },
  },

  async resolve(parent: any, args: any) {
    const { id_listing, id_fasilitas_kos} = args;

    await getConnection()
    .createQueryBuilder()
    .insert()
    .into("listing_fasilitas_koss_fasilitas_kos")
    .values([
        { listingId: id_listing, fasilitasKosId: id_fasilitas_kos}, 
     ])
    .execute();

    await getConnection()
    .createQueryBuilder()
    .insert()
    .into("fasilitas_kos_listings_listing")
    .values([
        { fasilitasKosId: id_fasilitas_kos, listingId: id_listing}, 
     ])
    .execute();
     return {successful: true, message: "Berhasil menghubungkan listing dan fasilitas"}
  },
};

export const DELRES_LISTING = {
  type: ListingType,
  args: {
    id: { type: GraphQLNonNull(GraphQLString) },
  },

  async resolve(parent: any, args: any) {
    const { id } = args;

    const stat = await getConnection()      
    .createQueryBuilder()      
    .select("listing.status")      
    .from(Listing, "listing")      
    .where("id = :id", { id: id })      
    .getOne();
    console.log(stat?.status);
    if(stat?.status == 1){
      await getConnection()
      .createQueryBuilder()
      .update('listing')
      .set({ status: 0,})
      .where("id = :id", { id: id })
      .execute()
      return {id: id, successful: true, message: "Berhasil melarang listing"}
    }else{
      await getConnection()
      .createQueryBuilder()
      .update('listing')
      .set({ status: 1,})
      .where("id = :id", { id: id })
      .execute()
      return {id: id, successful: true, message: "Berhasil mengembalikan listing"}
    }
  },
};

