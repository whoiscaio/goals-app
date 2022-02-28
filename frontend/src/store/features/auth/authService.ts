import axios from 'axios';

const API_URL = '/api/users';

export type registerUserType = {
  name: string,
  email: string,
  password: string,
}

export type loginUserType = {
  email: string,
  password: string,
}

async function register(userData: registerUserType) {
  const response = await axios({
    method: 'POST',
    url: API_URL,
    data: userData,
  });

  if(response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }

  return response.data;
}

async function login(userData: loginUserType) {
  const response = await axios({
    method: 'POST',
    url: `${API_URL}/login`,
    data: userData,
  });

  if(response.data) {
    console.log(response.data);
    localStorage.setItem('user', JSON.stringify(response.data));
  }

  return response.data;
}

async function logout() {
  localStorage.removeItem('user');
}

export const authService = {
  register, login, logout
}