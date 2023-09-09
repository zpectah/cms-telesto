import React, { ReactNode } from 'react';
import { styled } from '@mui/material';
import { ADMIN_CFG } from '@/core';
import { Container } from '../Container';

const StyledHeader = styled('header')`
  width: 100%;
  height: ${ADMIN_CFG.STYLE.HEADER_HEIGHT_DESKTOP};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 250;
  background-color: #ababab;
`;

export interface HeaderProps {
  children?: ReactNode;
}

const Header = (props: HeaderProps) => {
  const { children } = props;

  return (
    <StyledHeader>
      <Container>...{children}</Container>
    </StyledHeader>
  );
};

export default Header;
