import { createSlice } from '@reduxjs/toolkit';

const user = localStorage.getItem('user');
const parsedUser: string | null = user && JSON.parse(user);

const initialState = {
  user: parsedUser,
  isSuccess: false,
  isError: false,
  isLoading: false,
  message: '',
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: (state) => {
      state.isSuccess = false;
      state.isError = false;
      state.isLoading = false;
      state.message = '';
    }
  }
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;