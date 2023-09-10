import React from 'react';
import { styled } from '@mui/material';
import { ScrollableProps } from './types';

const StyledOuter = styled('div')(({ theme }) => ({
  width: '100%',
  height: '100%',
  overflow: 'hidden',
}));

const StyledInner = styled('div', {
  shouldForwardProp: (prop) => prop !== 'horizontal',
})<{
  horizontal: boolean;
}>(({ theme, horizontal }) => ({
  width: '100%',
  height: '100%',
  boxSizing: 'content-box',
  ...(horizontal
    ? {
        overflowX: 'scroll',
        paddingBottom: '20px',
      }
    : {
        overflowY: 'scroll',
        paddingRight: '20px',
      }),
}));

const Scrollable = (props: ScrollableProps) => {
  const { children, variant = 'vertical', style } = props;

  return (
    <StyledOuter>
      <StyledInner horizontal={variant === 'horizontal'} style={style}>
        {children}
      </StyledInner>
    </StyledOuter>
  );
};

export default Scrollable;
