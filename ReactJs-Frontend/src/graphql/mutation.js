import { gql } from "@apollo/client";

export const DELRES_USER = gql`
  mutation delresUser($id: String!) {
    delresUser(id: $id){
        successful
        message
    }
  }
`;

export const DELRES_LISTING = gql`
  mutation delresListing($id: String!) {
    delresListing(id: $id){
        successful
        message
    }
  }
`;


export const UPDATE_USER = gql `
mutation updateUser($nama_depan: String!, $nama_belakang: String!, $id: String!, $nik : String, $no_tlp: String!, $no_rek: String ) {
  updateUser(nama_depan: $nama_depan, nama_belakang: $nama_belakang, id : $id, no_tlp : $no_tlp, no_rek : $no_rek, nik: $nik) {
    id
    nama_depan
    nama_belakang
    status
    no_tlp
    role{
      id
      nama
    }
    foto_ktp
    foto
    email
    nik
    no_rek
  }
}
`;

export const UPDATE_PASSWORD = gql`
  mutation updatePassword($id: String!, $password: String!){
    updatePassword(id: $id, password: $password){
      successful
      message
    }
  }
`;

export const UPDATE_FASILITAS_KOS = gql`
  mutation updateFasilitasKos($id: String!, $nama: String!, $keterangan: String!) {
    updateFasilitasKos(id: $id, nama: $nama keterangan: $keterangan){
      successful
      message
    }
  }
`;

export const DELRES_RUMAH_KOS = gql`
  mutation delresRumah($id: String!) {
    delresRumah(id: $id){
        successful
        message
    }
  }
`;

export const DELRES_FASILITAS_KOS = gql`
  mutation delresFasilitas($id: String!) {
    delresFasilitas(id: $id){
        successful
        message
    }
  }
`;

export const DELRES_KEPER = gql`
  mutation delresKeper($id: String!) {
    delresKeper(id: $id){
        successful
        message
    }
  }
`;

export const DELRES_TESTIMONI = gql`
  mutation delresTestimoni($id: String!) {
    delresTestimoni(id: $id){
        successful
        message
    }
  }
`;

export const CREATE_USER = gql`
  mutation createUser($email: String!, $password: String!, $nama_depan: String!, $nama_belakang: String!, $no_tlp: String!, $id_role: Int!, $foto: String!) {
    createUser(email: $email, password: $password, nama_depan: $nama_depan, nama_belakang: $nama_belakang, no_tlp: $no_tlp, id_role: $id_role, foto: $foto) {
      successful
      message
    }
  }
`;


export const ADD_RUMAH_KOS = gql `
  mutation addRumahKos($id_user: String!, $nama: String!, $alamat: String!, $id_kota: Int!, $kode_pos : String!, $total_kamar : Int!, $sisa_kamar : Int!, $keterangan : String! ){
    addRumahKos(id_user : $id_user, nama: $nama, alamat:$alamat, id_kota: $id_kota, kode_pos:$kode_pos, total_kamar:$total_kamar, sisa_kamar:$sisa_kamar, keterangan: $keterangan){
      successful
      message
    }
  }
`;

export const ADD_LISTING = gql `
  mutation addListing($nama : String!, $jenis: Int!, $harga_bulanan: Int!, $harga_tahunan: Int!, $panjang: Int!, $lebar:Int!,$rumah_kos : String!, $keterangan: String!){
    addListing(nama : $nama, jenis: $jenis, harga_bulanan : $harga_bulanan, harga_tahunan : $harga_tahunan, panjang: $panjang, lebar : $lebar, rumah_kos: $rumah_kos, keterangan : $keterangan){
      id
      message
      successful
    }
  }
`;

export const ADD_PENYEWAAN = gql `
  mutation addpenyewaan($bulan : Int!, $tanggal_transaksi: String!, $status_pembayaran: Int!, $total: Int!, $id_penyewa: String!, $id_kamar: String!){
    addpenyewaan(bulan : $bulan, tanggal_transaksi : $tanggal_transaksi, status_pembayaran : $status_pembayaran, total : $total, id_penyewa : $id_penyewa, id_kamar : $id_kamar){
      id
      message
      successful
    }
  }
`;


export const EDIT_LISTING = gql `
mutation updateListing($id: String!, $nama : String!, $jenis: Int!, $harga_bulanan: Int!, $harga_tahunan: Int!, $panjang: Int!, $lebar:Int!,$rumah_kos : String!, $keterangan: String!){
  updateListing(id : $id,nama : $nama, jenis: $jenis, harga_bulanan : $harga_bulanan, harga_tahunan : $harga_tahunan, panjang: $panjang, lebar : $lebar, rumah_kos: $rumah_kos, keterangan : $keterangan){
    id
    message
    successful
  }
}
`;

export const UPDATE_RUMAH_KOS = gql `
  mutation updateRumahKos($id: String!, $nama: String!, $alamat: String!, $id_kota: Int!, $kode_pos : String!, $total_kamar : Int!, $sisa_kamar : Int!, $keterangan : String!){
    updateRumahKos(id: $id, nama: $nama, alamat: $alamat, id_kota: $id_kota, kode_pos : $kode_pos, total_kamar : $total_kamar, sisa_kamar : $sisa_kamar, keterangan : $keterangan){
      successful
      message
    }
  }
`;


export const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      id
      nama_depan
      nama_belakang
      status
      no_tlp
      role{
        id
        nama
      }
      foto_ktp
      foto
      email
      nik
      no_rek
      isPassword
      created_at
    }
  }
`;
