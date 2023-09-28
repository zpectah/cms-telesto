import React from 'react';
import { Sheet, LinearProgress } from '@mui/joy';

export interface PreloaderBarProps {
  loading?: boolean;
}

const PreloaderBar = (props: PreloaderBarProps) => {
  const { loading } = props;

  if (!loading) return null;

  return (
    <Sheet
      sx={{
        width: '100vw',
        height: '4px',
        position: 'fixed',
        top: 0,
        left: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      <LinearProgress variant="plain" sx={{ height: '4px' }} />
    </Sheet>
  );
};

export default PreloaderBar;
