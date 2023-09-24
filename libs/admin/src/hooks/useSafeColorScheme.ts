import { useEffect, useState } from 'react';
import { useColorScheme } from '@mui/joy/styles';

export const useSafeColorScheme = () => {
  const [loaded, setLoaded] = useState(false);

  const colorScheme = useColorScheme();

  useEffect(() => {
    setLoaded(true);
  }, []);

  if (!loaded)
    return {
      mode: null,
      setMode: () => null,
    };

  return colorScheme;
};
