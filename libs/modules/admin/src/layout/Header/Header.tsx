import React from 'react';
import { styled } from '@mui/material';
import { ADMIN_CFG } from '../../config';
import { Container } from '../Container';
import { useLayoutContext } from '../../context';
import { HeaderProps } from './types';

const StyledHeader = styled('header')`
  width: 100%;
  height: ${ADMIN_CFG.STYLE.HEADER_HEIGHT_DESKTOP};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 250;
  background-color: #ababab;
`;

const Header = (props: HeaderProps) => {
  const { children } = props;

  const { open, toggle } = useLayoutContext();

  return (
    <StyledHeader>
      <Container>
        <button onClick={() => toggle()}>
          menu toggle ... {open ? 'open' : 'closed'}
        </button>
        ...{children}
      </Container>
    </StyledHeader>
  );
};

export default Header;
