'use client';

import { createSlice } from '@reduxjs/toolkit';

export interface SliceStoreProps {
  value: number;
}

const initialState: SliceStoreProps = {
  value: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    counterIncrement: (state) => {
      state.value += 1;
    },
    counterDecrement: (state) => {
      state.value -= 1;
    },
    counterIncrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { counterIncrement, counterDecrement, counterIncrementByAmount } =
  counterSlice.actions;

export default counterSlice.reducer;
