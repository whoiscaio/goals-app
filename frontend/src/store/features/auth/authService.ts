import axios from 'axios';

const API_URL = '/api/users';

type registerUserType = {
  name: string,
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

export const authService = {
  register,
}