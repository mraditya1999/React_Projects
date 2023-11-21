import { configureStore } from '@reduxjs/toolkit';
import taskReducer from '../features/taskify/taskifySlice';

export const store = configureStore({
  reducer: taskReducer,
});
