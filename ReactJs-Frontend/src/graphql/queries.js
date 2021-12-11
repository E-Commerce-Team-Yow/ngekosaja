import { gql } from "@apollo/client";

export const GET_ALL_LISTING = gql`
  query getAllListing {
    getAllListing{
        id
        nama
        panjang
        lebar
        harga_bulanan
        status
        fasilitas_koss{
          id
          nama
        }
    }
  }
`;

export const GET_ALL_LISTING_OWNER = gql`
  query getAllListingUserOwner($id_user :String!){
    getAllListingUserOwner(id_user : $id_user){
      id
      nama
      jenis
      panjang
      lebar
      harga_bulanan
      harga_tahunan
      keterangan
      status
      successful
      fasilitas_koss{
        id
        nama
      }
      rumah_kos{
        id
      }
    }
  }
`;


export const GET_ONE_LISTING = gql`
  query getOneListing ($id_kamar: String) {
    getOneListing (id_kamar: $id_kamar) {
        id
        nama
        jenis
        panjang
        lebar
        harga_bulanan
        harga_tahunan
        keterangan
        status
        successful
        fasilitas_koss{
          id
          nama
        }
        rumah_kos{
          id
        }
    }
  }
`;

export const GET_ALL_USERS = gql`
  query getAllUsers {
    getAllUsers{
      id
      nama_depan
      nama_belakang
      email
      no_tlp
      nik
      jenis_kelamin
      status
    }
  }
`;

export const GET_ONE_USER = gql`
  query getOneUser($id: String!) {
    getOneUser(id: $id) {
      nama_depan
      nama_belakang
      email
      password
    }
  }
`;

export const GET_ALL_FASILITAS_KOS = gql`
  query getAllFasilitasKos($search: String) {
    getAllFasilitasKos(search: $search){
      id
      nama
      keterangan
      status
    }
  }
`;

export const GET_ONE_FASILITAS_KOS = gql`
  query getOneFasilitasKos($id: String!) {
    getOneFasilitasKos(id: $id){
      nama
      keterangan
      status
    }
  }
`;

export const GET_ALL_KEPER = gql`
  query getAllKeper {
    getAllKeper{
      id
      isi
      tipe
      status
    }
  }
`;

export const GET_ALL_RUMAH_KOS = gql`
  query getAllRumahKos($search: String) {
    getAllRumahKos(search: $search){
      id
      nama
      alamat
      keterangan
      kode_pos
      kota{
        id
        nama
      }
      total_kamar
      sisa_kamar
      status
    }
  }
`;

export const GET_LAST_RUMAH_KOS = gql`
  query getLastRumahKos($limit: Int!) {
    getLastRumahKos(limit: $limit){
      id
      nama
      alamat
      keterangan
      kode_pos
      kota{
        id
        nama
      }
      total_kamar
      sisa_kamar
      status
    }
  }
`;


export const GET_RUMAH_KOS_USER = gql`
  query getAllRumahKosUser($id_user: String!) {
    getAllRumahKosUser(id_user: $id_user){
      id
      nama
      alamat
      kode_pos
      keterangan
      kota{
        id
        nama
      }
      total_kamar
      sisa_kamar
      status
    }
  }
`;


export const GET_ONE_RUMAH_KOS = gql`
  query getOneRumahKos($id: String!) {
    getOneRumahKos(id: $id){
      id
      nama
      alamat
      kode_pos
      keterangan
      kota{
        id
        nama
      }
      provinsi
      total_kamar
      sisa_kamar
      status
    }
  }
`;


export const GET_ALL_KOTA = gql`
  query getAllKota($search: String) {
    getAllKota(search: $search){
      id
      nama
    }
  }
`;

export const GET_ALL_TESTIMONI = gql`
  query getAllTestimoni {
    getAllTestimoni{
      id
      isi
      status
    }
  }
`;



