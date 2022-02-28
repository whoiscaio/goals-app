import { createSlice } from '@reduxjs/toolkit';

const user = localStorage.getItem('user');
const parsedUser = user ? JSON.parse(user) : null;

type authStateType = {
  user: string | null,
  isSuccess: boolean,
  isError: boolean,
  isLoading: boolean,
  message: string,
}

const initialState: authStateType = {
  user: parsedUser || null,
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