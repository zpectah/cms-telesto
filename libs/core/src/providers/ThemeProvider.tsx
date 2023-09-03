import React from 'react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { ThemeProviderProps } from '@mui/material/styles/ThemeProvider';

const ThemeProvider = (props: ThemeProviderProps) => {
  return <MuiThemeProvider {...props} />;
};

export default ThemeProvider;
