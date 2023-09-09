import React, { ReactNode } from 'react';
import {
  Container as MuiContainer,
  ContainerProps as MuiContainerProps,
} from '@mui/material';

export interface ContainerProps {
  children: ReactNode;
  containerProps?: Partial<MuiContainerProps>;
}

const Container = (props: ContainerProps) => {
  const { children, containerProps } = props;

  return (
    <MuiContainer maxWidth={false} {...containerProps}>
      {children}
    </MuiContainer>
  );
};

export default Container;
