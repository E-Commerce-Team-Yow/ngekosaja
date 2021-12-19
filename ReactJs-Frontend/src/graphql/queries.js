import { gql } from "@apollo/client";

export const GET_ALL_LISTING = gql`
  query getAllListing ($vmin :Int $vmax :Int) {
    getAllListing(vmin: $vmin, vmax: $vmax){
        id
        nama
        panjang
        lebar
        harga_bulanan
        status
        foto
        fasilitas_koss{
          id
          nama
        }
    }
  }
`;

export const GET_LISTING_BETWEEN_EXPECTED_PRICE = gql`
  query getListingBetweenExpectedPrice($vmin :Int! $vmax :Int!) {
    getListingBetweenExpectedPrice(vmin : $vmin, vmax : $vmax){
        id
        nama
        panjang
        lebar
        foto
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
      foto
      status
      successful
      fasilitas_koss{
        id
        nama
      }
      rumah_kos{
        id
        nama
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
      foto
      keterangan
      kode_pos
      kota{
        id
        nama
      }
      total_kamar
      sisa_kamar
      status
      ketentuan_peraturan{
        id
        isi
      }
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
      foto
      total_kamar
      sisa_kamar
      status
      ketentuan_peraturan{
        id
        isi
      }
    }
  }
`;


export const GET_RUMAH_KOS_USER = gql`
  query getAllRumahKosUser($id_user: String!, $type : Int!) {
    getAllRumahKosUser(id_user: $id_user, type : $type){
      id
      nama
      alamat
      kode_pos
      keterangan
      foto
      kota{
        id
        nama
      }
      total_kamar
      sisa_kamar
      status
      ketentuan_peraturan{
        id
        isi
      }
    }
  }
`;


export const GET_ONE_RUMAH_KOS = gql`
  query getOneRumahKos($id: String!) {
    getOneRumahKos(id: $id){
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
      foto
      listingRumahKos{
        id
        nama
        foto
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
      }
      ketentuan_peraturan{
        id
        isi
      }
    }
  }
`;


export const GET_JUM_RUMAH_KOS_USER = gql `
  query getJumlahRumahKos($id_user : String!){
    getJumlahRumahKos(id_user : $id_user){
      count
      
    }
  } 
`;

export const GET_JUM_LISTING_PEMILIK = gql `
  query getJumlahListingPemilik($id_user : String!){
    getJumlahListingPemilik(id_user : $id_user){
      count
     
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
      nilai
      listing{
        id
      }
    }
  }
`;

export const GET_AVG_TESTIMONI = gql`
  query getAverageTestimoni($id_rumah_kos: String!) {
    getAverageTestimoni(id_rumah_kos: $id_rumah_kos){
      average
    }
  }
`;

export const GET_ALL_TESTIMONI_RUMAH_KOS = gql`
  query getAllTestimoniRumahKos($id_rumah_kos: String!) {
    getAllTestimoniRumahKos(id_rumah_kos: $id_rumah_kos){
      id
      nilai
      isi
      listing{
        nama
      }
      user{
        nama_depan
        nama_belakang
        foto
      }
    }
  }
`;

export const GET_ALL_PENYEWAAN = gql`
  query getAllPenyewaan($id_user : String!){
    getAllPenyewaan(id_user : $id_user){
      id
      status_pembayaran
      bulan
      total
      tanggal_transaksi
      user{
        id
        nama_depan
        nama_belakang
      }
      listing{
        id
      }
      isi
      status
    }
  }
`;
export const GET_ALL_PENYEWAAN_kos = gql`
  query getPenyewaanPemilik($id_pemilik : String!){
    getPenyewaanPemilik(id_pemilik : $id_pemilik){
      id
      status_pembayaran
      bulan
      total
      tanggal_transaksi
      user{
        id
        nama_depan
        nama_belakang
        no_tlp
      }
      listing{
        id
      }
      
      status
    }
  }
`;
