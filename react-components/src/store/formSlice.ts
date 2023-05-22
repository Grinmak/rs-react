import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import IFormFields from '../types/IFormFields';

type IFormList = {
  formList: Array<IFormFields>;
};

const initialState: IFormList = {
  formList: [],
};

const formSlice = createSlice({
  name: 'formSlice',
  initialState,
  reducers: {
    newSubmit: (state, action: PayloadAction<IFormFields>) => {
      state.formList.push(action.payload);
      alert('New card will be created');
    },
  },
});

export const { newSubmit } = formSlice.actions;
export default formSlice.reducer;
