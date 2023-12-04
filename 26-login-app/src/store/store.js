import { configureStore } from '@reduxjs/toolkit';
import authSliceReducer from '../features/authSlice';
import usersSliceReducer from '../features/usersSlice';

export const store = configureStore({
  reducer: {
    auth: authSliceReducer,
    users: usersSliceReducer,
  },
});
