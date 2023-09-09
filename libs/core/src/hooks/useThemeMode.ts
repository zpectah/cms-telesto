import { useState, useMemo, useEffect } from 'react';
import { createTheme, Theme } from '@mui/material';
import { getLocalStorageValue, setLocalStorageValue } from '../utils';

export const useThemeMode = (themeInitial: Theme, key: string) => {
  const [mode, setMode] = useState<'light' | 'dark'>('light');

  const colorMode = useMemo(
    () => ({
      toggle: () => {
        setMode((prevMode) => {
          const value = prevMode === 'light' ? 'dark' : 'light';
          setLocalStorageValue(key, value);

          return value;
        });
      },
    }),

    // eslint-disable-next-line react-hooks/exhaustive-deps
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

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => setMode(getLocalStorageValue(key) || 'light'), []);

  return { colorMode, theme };
};
