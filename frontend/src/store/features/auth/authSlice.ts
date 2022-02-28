import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { authService } from './authService';

type userDataType = {
  _id: string;
  name: string;
  email: string;
  token: string;
};

type registerUserType = {
  name: string,
  email: string,
  password: string,
}

const user = localStorage.getItem('user');
const parsedUser: userDataType | null = user && JSON.parse(user);

const initialState = {
  user: parsedUser,
  isSuccess: false,
  isError: false,
  isLoading: false,
  message: '',
};

export const register = createAsyncThunk(
  'auth/register',
  async (user: registerUserType, thunkAPI) => {
    try {
      return await authService.register(user);
    } catch (err: any) {
      const message =
        (err.response &&
          err.response.data &&
          err.response.data.message) ||
        err.message ||
        String(err);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
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
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = String(action.payload);
      });
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
