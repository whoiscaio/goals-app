import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { goalService } from './goalService';

export type GoalType = {
  text: string;
  completed: boolean;
  _id?: string,
};

export type CreateGoalType = {
  goal: GoalType,
  token: string,
}

export type DeleteGoalType = {
  goalId: string,
  token: string,
}

const initialState = {
  goals: [] as GoalType[],
  isSuccess: false,
  isError: false,
  isLoading: false,
  message: '',
};

export const getGoals = createAsyncThunk(
  'goals/get',
  async (token: string, thunkAPI) => {
    try {
      return await goalService.getGoals(token);
    } catch (err: any) {
      const message =
        (err.response && err.response.data && err.response.data.message) ||
        err.message ||
        String(err);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const createNewGoal = createAsyncThunk(
  'goals/create',
  async (info: CreateGoalType, thunkAPI) => {
    const { goal, token } = info;

    try {
      return await goalService.create(goal, token);
    } catch (err: any) {
      const message =
        (err.response && err.response.data && err.response.data.message) ||
        err.message ||
        String(err);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const deleteGoal = createAsyncThunk(
  'goals/delete',
  async (info: DeleteGoalType, thunkAPI) => {
    const { goalId, token } = info;

    try {
      return await goalService.deleteGoal(goalId, token);
    } catch (err: any) {
      const message =
        (err.response && err.response.data && err.response.data.message) ||
        err.message ||
        String(err);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const goalSlice = createSlice({
  name: 'goal',
  initialState,
  reducers: {
    reset: (state) => {
      state.goals = [];
      state.isSuccess = false;
      state.isError = false;
      state.isLoading = false;
      state.message = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getGoals.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getGoals.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.goals = action.payload;
      })
      .addCase(getGoals.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = String(action.payload);
      })
      .addCase(createNewGoal.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createNewGoal.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.goals = [...state.goals, action.payload];
      })
      .addCase(createNewGoal.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = String(action.payload);
      })
      .addCase(deleteGoal.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteGoal.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.goals = state.goals.filter((goal) => goal._id !== action.payload._id);
      })
      .addCase(deleteGoal.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = String(action.payload);
      })
  },
});

export const { reset } = goalSlice.actions;
export default goalSlice.reducer;
