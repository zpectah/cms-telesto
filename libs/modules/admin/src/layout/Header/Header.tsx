import React from 'react';
import { styled } from '@mui/material';
import { ADMIN_CFG } from '../../config';
import { Container } from '../Container';
import { useLayoutContext } from '../../context';
import { HeaderProps } from './types';

const StyledHeader = styled(
  'header',
  {}
)(({ theme }) => ({
  width: '100%',
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 250,
  backgroundColor: '#555',
  height: ADMIN_CFG.STYLE.HEADER_HEIGHT_MOBILE,
  [theme.breakpoints.up('sm')]: {
    height: ADMIN_CFG.STYLE.HEADER_HEIGHT_DESKTOP,
  },
}));

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
