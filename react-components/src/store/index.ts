import { configureStore } from '@reduxjs/toolkit';
// import reducer from slice
import formStateReducer from './formSlice';
import searchValueReducer from './searchSlice';

const store = configureStore({
  reducer: {
    formState: formStateReducer,
    searchValue: searchValueReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
