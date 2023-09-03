'use client';

import { combineReducers, configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counter';

const webRootReducer = combineReducers({
  counter: counterReducer,
  // another reducer here
});

export const webStore = configureStore({
  reducer: webRootReducer,
});
