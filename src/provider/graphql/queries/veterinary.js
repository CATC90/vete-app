import { gql } from '@apollo/client';

export const CREATE_VETERINARY = gql`mutation{
    createVeterinary(veterinary: {
      name: "Isabel",
      lastName: "De Rodt",
      secondLastName:"Gonzalez",
      rut: "16.007.557-0",
      email:"sakura_kary@gmail.com",
      password: "23PeopleSPA!",
      socialNetworks: [{
        type:facebook,
        link:"https://www.facebook.com/hory"
      }]
    }){
      _id
      fullName
      rut
      email
      password
    }
  }`;
export const GET_VETERINARY = gql`mutation{
  createVeterinary(veterinary: {
    name: "Isabel",
    lastName: "De Rodt",
    secondLastName:"Gonzalez",
    rut: "16.007.557-0",
    email:"sakura_kary@gmail.com",
    password: "23PeopleSPA!",
    socialNetworks: [{
      type:facebook,
      link:"https://www.facebook.com/hory"
    }]
  }){
    _id
    fullName
    rut
    email
    password
  }
}`;
