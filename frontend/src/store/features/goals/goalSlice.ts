import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { goalService } from './goalService';

export type GoalType = {
  text: string;
  completed: boolean;
};

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

const goalSlice = createSlice({
  name: 'goal',
  initialState,
  reducers: {
    reset: (state) => {
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
      });
  },
});

export const { reset } = goalSlice.actions;
export default goalSlice.reducer;
