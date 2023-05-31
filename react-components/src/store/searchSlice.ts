import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type ISearchState = {
  inputValue: string;
};

const initialState: ISearchState = { inputValue: '' };

const searchSlice = createSlice({
  name: 'searchRequest',
  initialState,
  reducers: {
    addRequestValue: (state, action: PayloadAction<string>) => {
      state.inputValue = action.payload;
      console.log('state:', state.inputValue);
      console.log('payload:', action.payload);
    },
  },
});

export const { addRequestValue } = searchSlice.actions;
export default searchSlice.reducer;
