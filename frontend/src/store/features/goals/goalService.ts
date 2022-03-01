import axios from 'axios';
import { GoalType } from './goalSlice';

const API_URL = 'api/goals';

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

async function update(newGoal: GoalType, goalId: string, token: string) {
  const response = await axios({
    method: 'PUT',
    data: newGoal,
    url: `${API_URL}/${goalId}`,
    headers: {
      Authorization: `Bearer ${token}`,
    }
  });

  return response.data;
}

async function deleteGoal(goalId: string, token: string) {
  const response = await axios({
    method: 'DELETE',
    url: `${API_URL}/${goalId}`,
    headers: {
      Authorization: `Bearer ${token}`,
    }
  });

  return response.data;
}

export const goalService = {
  getGoals, create, update, deleteGoal
};