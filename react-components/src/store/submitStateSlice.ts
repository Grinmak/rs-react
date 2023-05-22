import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type ISubmitStateSlice = {
  isSubmitted: boolean;
};

const initialState: ISubmitStateSlice = { isSubmitted: false };

const submitState = createSlice({
  name: 'setSubmitted',
  initialState,
  reducers: {
    setIsSubmitted(state, action: PayloadAction<boolean>) {
      state.isSubmitted = true;
    },
  },
});

export const { setIsSubmitted } = submitState.actions;
export default submitState.reducer;
