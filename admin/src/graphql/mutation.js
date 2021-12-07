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

export const UPDATE_FASILITAS_KOS = gql`
  mutation updateFasilitasKos($id: String!, $nama: String!, $keterangan: String!) {
    updateFasilitasKos(id: $id, nama: $nama keterangan: $keterangan){
      successful
      message
    }
  }
`;

export const ADD_FASILITAS_KOS = gql`
  mutation addFasilitasKos($nama: String!, $keterangan: String!) {
    addFasilitasKos(nama: $nama keterangan: $keterangan){
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
  mutation createUser($name: String!, $username: String!, $password: String!) {
    createUser(name: $name, username: $username, password: $password) {
      id
      name
      username
    }
  }
`;

export const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      role{
        id
        nama
      }
    }
  }
`;

export const DELRES_MEDIA = gql`
  mutation delresMedia($id: String!){
    delresMedia(id: $id){
      successful
      message
    }
  }
`;

export const ADD_MEDIA = gql`
  mutation addMedia($path: String!){
    addMedia(path: $path){
      id
      successful
      message
    }
  }
`;

export const UPDATE_MEDIA = gql`
  mutation updateMedia($id: String!, $path: String!){
    updateMedia(id: $id, path: $path){
      successful
      message
    }
  }
`;

export const ADD_KEPER = gql`
  mutation addKeper($isi: String!, $tipe: String!, $listingId: String!){
    addKeper(isi: $isi, tipe: $tipe, listingId: $listingId){
      id
      successful
      message
    }
  }
`;
