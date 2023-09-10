import React from 'react';
import { styled } from '@mui/material';
import { ContentProps } from './types';

const StyledContent = styled('div')(() => ({
  paddingTop: '1rem',
  paddingBottom: '1rem',
}));

const Content = (props: ContentProps) => {
  const { children } = props;

  return <StyledContent>{children}</StyledContent>;
};

export default Content;
