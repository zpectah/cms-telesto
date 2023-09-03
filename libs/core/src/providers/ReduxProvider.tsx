'use client';

import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { Store } from '@reduxjs/toolkit';

export interface ReduxProviderProps {
  children: ReactNode;
  store: Store;
}

const ReduxProvider = ({ children, store }: ReduxProviderProps) => (
  <Provider store={store}>{children}</Provider>
);

export default ReduxProvider;
