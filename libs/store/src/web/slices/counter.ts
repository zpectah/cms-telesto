'use client';

import { createSlice } from '@reduxjs/toolkit';

export interface WebSliceStoreProps {
  value: number;
}

const initialState: WebSliceStoreProps = {
  value: 0,
};

export const webCounterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    webCounterIncrement: (state) => {
      state.value += 1;
    },
    webCounterDecrement: (state) => {
      state.value -= 1;
    },
    webCounterIncrementByAmount: (state, action: { payload: number }) => {
      state.value += action.payload;
    },
  },
});

export const {
  webCounterIncrement,
  webCounterDecrement,
  webCounterIncrementByAmount,
} = webCounterSlice.actions;

export default webCounterSlice.reducer;
