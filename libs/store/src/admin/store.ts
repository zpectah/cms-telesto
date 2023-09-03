'use client';

import { combineReducers, configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counter';

const adminRootReducer = combineReducers({
  counter: counterReducer,
  // another reducer here
});

export const adminStore = configureStore({
  reducer: adminRootReducer,
});
