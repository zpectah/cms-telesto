'use client';

import { combineReducers, configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';

export type AdminStateProps = ReturnType<typeof store.getState>;
export type AppDispatchProps = typeof store.dispatch;

const rootReducer = combineReducers({
  counter: counterReducer,
  //add all your reducers here
});

export const store = configureStore({
  reducer: rootReducer,
});
