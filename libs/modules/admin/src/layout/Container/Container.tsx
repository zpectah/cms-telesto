import React from 'react';
import { Container as MuiContainer } from '@mui/material';
import { ContainerProps } from './types';

const Container = (props: ContainerProps) => {
  const { children, containerProps } = props;

  return (
    <MuiContainer maxWidth={false} {...containerProps}>
      {children}
    </MuiContainer>
  );
};

export default Container;
