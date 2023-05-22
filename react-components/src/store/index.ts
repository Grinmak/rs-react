import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
// import reducer from slice
import submitStateReducer from './submitStateSlice';
import formStateReducer from './formSlice';

const store = configureStore({
  reducer: {
    submitState: submitStateReducer,
    formState: formStateReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
