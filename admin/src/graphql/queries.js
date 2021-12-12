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
  query getAllFasilitasKos {
    getAllFasilitasKos{
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

export const GET_ONE_KEPER = gql`
  query getOneKeper($id: String!){
    getOneKeper(id: $id){
      id
      isi
      tipe
      id_listing
    }
  }
`

export const GET_ALL_RUMAH_KOS = gql`
  query getAllRumahKos {
    getAllRumahKos{
      id
      nama
      alamat
      kota
      provinsi
      total_kamar
      sisa_kamar
      status
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
export const GET_ALL_MEDIA = gql`
  query getAllMedia {
    getAllMedia{
      id 
      path
      status
    }
  }
`;

export const GET_ONE_MEDIA = gql`
  query getOneMedia($id: String!){
    getOneMedia(id: $id){
      id
      path 
      status
    }
  }
`;

export const GET_ALL_KOTA = gql`
  query getAllKota{
    getAllKota{
      id
      nama
      gambar
    }
  }
`;

export const GET_ONE_KOTA = gql`
  query getOneKota($id: Int!){
    getOneKota(id: $id){
      id
      nama
      gambar 
    }
  }
`;


