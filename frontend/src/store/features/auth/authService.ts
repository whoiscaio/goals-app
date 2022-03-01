import axios from 'axios';

const API_URL = '/api/users';

export type RegisterUserType = {
  name: string,
  email: string,
  password: string,
}

export type LoginUserType = {
  email: string,
  password: string,
}

async function register(userData: RegisterUserType) {
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

async function login(userData: LoginUserType) {
  const response = await axios({
    method: 'POST',
    url: `${API_URL}/login`,
    data: userData,
  });

  console.log(response);

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