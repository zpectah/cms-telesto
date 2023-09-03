'use client';

import { createSlice } from '@reduxjs/toolkit';

export interface SliceStoreProps {
  value: number;
}

const initialState: SliceStoreProps = {
  value: 0,
};

export const adminCounterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    counterIncrement: (state) => {
      state.value += 1;
    },
    counterDecrement: (state) => {
      state.value -= 1;
    },
    counterIncrementByAmount: (state, action: { payload: number }) => {
      state.value += action.payload;
    },
  },
});

export const { counterIncrement, counterDecrement, counterIncrementByAmount } =
  adminCounterSlice.actions;

export default adminCounterSlice.reducer;
