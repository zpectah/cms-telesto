import React from 'react';
import { styled } from '@mui/material';
import { ContentProps } from './types';

const StyledContent = styled('div', {
  shouldForwardProp: (prop) => prop !== 'offsetY',
})<{
  offsetY?: boolean;
}>(({ offsetY }) => ({
  paddingTop: offsetY ? '1rem' : '0',
  paddingBottom: offsetY ? '1rem' : '0',
}));

const Content = (props: ContentProps) => {
  const { children, style, offsetY } = props;

  return <StyledContent children={children} style={style} offsetY={offsetY} />;
};

export default Content;
