import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  isLoggedIn: false,
  isLoading: false,
  isError: false,
};

export const getCurrentUser = createAsyncThunk(
  'auth/getCurrentUser',
  async (body, thunkAPI) => {
    try {
      const { data } = await axios.post(
        import.meta.env.VITE_API_URL + '/auth/login',
        body
      );
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.response.data);
      throw error;
    }
  }
);

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCurrentUser.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(getCurrentUser.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(getCurrentUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
