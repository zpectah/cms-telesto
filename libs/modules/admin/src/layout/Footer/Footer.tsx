import React from 'react';
import { styled } from '@mui/material';
import { useFooter } from './useFooter';
import { FooterProps } from './types';

const StyledFooter = styled('footer')``;

const Footer = (props: FooterProps) => {
  const { children } = props;

  const { primary } = useFooter();

  return (
    <StyledFooter>
      {primary}...{children}
    </StyledFooter>
  );
};

export default Footer;
