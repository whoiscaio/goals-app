import { createSlice } from '@reduxjs/toolkit'

type GoalType = {
  text: string,
  completed: boolean,
}

const initialState = {
  goals: [] as GoalType[],
  isSuccess: false,
  isError: false,
  isLoading: false,
  message: '',
}

const goalSlice = createSlice({
  name: 'goal',
  initialState,
  reducers: {
    reset: (state) => {
      state.isSuccess = false;
      state.isError = false;
      state.isLoading = false;
      state.message = '';
    }
  },
  extraReducers: () => {},
});

export const { reset } = goalSlice.actions;
export default goalSlice.reducer;