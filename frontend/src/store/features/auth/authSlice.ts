import { createSlice } from '@reduxjs/toolkit';

const user = JSON.parse(localStorage.getItem('user') || '');

type authStateType = {
  user: string | null,
  isSuccess: boolean,
  isError: boolean,
  isLoading: boolean,
  message: string,
}

const initialState: authStateType = {
  user: user || null,
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