import axios from 'axios';

const API_URL = '/api/goals';

async function getGoals(token: string) {
  const response = await axios({
    method: 'GET',
    url: API_URL,
    headers: {
      Authorization: `Bearer ${token}`,
    }
  });

  return response.data;
}

export const goalService = {
  getGoals
};