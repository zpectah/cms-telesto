import { useState, useMemo } from 'react';
import { createTheme } from '@mui/material';
import { Theme } from '@mui/material';

export const useThemeMode = (themeInitial: Theme) => {
  const [mode, setMode] = useState<'light' | 'dark'>('light');
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    []
  );

  const theme = useMemo(
    () =>
      createTheme(themeInitial, {
        palette: {
          mode,
        },
      }),
    [mode, themeInitial]
  );

  return { colorMode, theme };
};
