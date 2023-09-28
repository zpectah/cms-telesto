import React from 'react';
import { Sheet, CircularProgress } from '@mui/joy';

export interface PreloaderProps {
  loading?: boolean;
}

const Preloader = (props: PreloaderProps) => {
  const { loading } = props;

  if (!loading) return null;

  return (
    <Sheet
      sx={{
        width: '100vw',
        height: '100vh',
        position: 'fixed',
        top: 0,
        left: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <CircularProgress />
    </Sheet>
  );
};

export default Preloader;
