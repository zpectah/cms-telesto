import React, { ReactNode } from 'react';
import { styled } from '@mui/material';
import { useFooter } from './useFooter';

const StyledFooter = styled('footer')``;

export interface FooterProps {
  children?: ReactNode;
}

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
