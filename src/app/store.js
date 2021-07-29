import { configureStore } from '@reduxjs/toolkit';
import expressionReducer from '../features/counterSlice';

export const store = configureStore({
  reducer: {
    input: expressionReducer,
  },
})
