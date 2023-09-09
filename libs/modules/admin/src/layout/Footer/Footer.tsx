import React, { ReactNode } from 'react';
import { styled } from '@mui/material';
import { Container } from '../Container';
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
      <Container>
        {primary}...{children}
      </Container>
    </StyledFooter>
  );
};

export default Footer;
