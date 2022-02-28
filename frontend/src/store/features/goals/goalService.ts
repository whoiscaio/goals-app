import axios from 'axios';
import { GoalType } from './goalSlice';

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

async function create(goal: GoalType, token: string) {
  const response = await axios({
    method: 'POST',
    url: API_URL,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: goal,
  });
  
  return response.data;
}

export const goalService = {
  getGoals, create
};