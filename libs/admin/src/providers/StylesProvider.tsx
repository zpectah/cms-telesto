import React from 'react';
import { CssVarsProvider } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';
import { WithChildren } from '../types';
import { theme } from '../styles';

export interface StylesProviderProps extends WithChildren {}

export const StylesProvider = (props: StylesProviderProps) => {
  const { children } = props;

  return (
    <CssVarsProvider theme={theme}>
      <CssBaseline />
      {children}
    </CssVarsProvider>
  );
};
