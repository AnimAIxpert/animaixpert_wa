import axios from 'axios'
import {BACKEND_API_URL} from './api'
import { store } from '../redux';


export const SignUp = async ( username, email, password, birthDate) =>  { // Registro de usuario en la plataforma.
  let formData = new FormData();
  formData.append('username', username);
  formData.append('email', email);
  formData.append('password', password);
  formData.append('birthdate', birthDate);
  
  let result = await axios.post(BACKEND_API_URL + '/register', formData, {
    headers: {
      'Content-Type': 'application/json'
    }
  });

  return result.data
}


export const  SignIn = async (email, password) => {  // Inicio de sesión de usuario en la plataforma.
  // let formData = new FormData();
  // formData.append('email', email);
  // formData.append('password', password);
  
  let result = await axios.get(BACKEND_API_URL + '/login', {
    params: {
      username: email,
      password: password
    }});
  return {
    token: result.data.access_token
  } 
}

export const WhoAmI = async (token) => { // Obtener información del usuario.
  let result = await axios.get(BACKEND_API_URL + '/user', {
    headers: {
      'Authorization': 'Bearer ' + token
    }
  });
  return {
    email: result.data.profile.mail,
    username: result.data.profile.username,
    birthdate: result.data.profile.birthdate['$date']
  } 
}

export const UpdateUser = async (id, email, firstname, lastname, institution, city, country) => { 
  let formData = new FormData();
  formData.append('id', id);
  formData.append('email', email);
  formData.append('firstname', firstname);
  formData.append('lastname', lastname);
  formData.append('institution', institution);
  formData.append('city', city);
  formData.append('country', country);
  
  let result = await axios.put(BACKEND_API_URL + '/update', formData, {
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + store.getState().user.token
    }});
    console.log(result.data)
    return {
      id: result.data.id,
      email: result.data.email,
      firstname: result.data.firstname,
      lastname: result.data.lastname,
      institution: result.data.institution,
      city: result.data.city,
      country: result.data.country
    }
}

export const UpdatePassword = async (password, newPassword) => {
  let formData = new FormData();
  formData.append('password', password);
  formData.append('newPassword', newPassword);
  let result = await axios.put(BACKEND_API_URL + '/updatePassword', formData, {
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + store.getState().user.token
    }});
    return {
      id: result.data.id,
      email: result.data.email,
      firstname: result.data.firstname,
      lastname: result.data.lastname,
      institution: result.data.institution,
      city: result.data.city,
      country: result.data.country
    }
}