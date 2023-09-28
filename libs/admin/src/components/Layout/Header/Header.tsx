import React from 'react';
import { styled } from '@mui/joy';
import { WithChildren } from '../../../types';
import { STYLES } from '../../../constants';
import HeaderLogo from './HeaderLogo';
import HeaderSidebarToggle from './HeaderSidebarToggle';
import HeaderUser from './HeaderUser';

export interface HeaderProps extends Partial<WithChildren> {}

const WrapperOuter = styled('header')(({ theme }) => ({
  width: '100%',
  height: STYLES.HEADER.HEIGHT,
  position: 'fixed',
  top: 0,
  left: 0,
  backgroundColor: theme.vars.palette.background.level1,
}));
const WrapperInner = styled('div')(({ theme }) => ({
  width: '100%',
  height: '100%',

  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '1rem',
}));
const HeaderBlock = styled('div')(({ theme }) => ({
  width: 'auto',
  display: 'flex',
  flexDirection: 'row',
  gap: '.5rem',
  alignItems: 'center',
}));
const HeaderBlockSecondary = styled(HeaderBlock)(({ theme }) => ({
  paddingLeft: '.5rem',
  paddingRight: '.5rem',
}));

const Header = (props: HeaderProps) => {
  const { children } = props;

  return (
    <WrapperOuter>
      <WrapperInner>
        <HeaderBlock>
          <HeaderSidebarToggle />
          <HeaderLogo />
        </HeaderBlock>
        {children && <HeaderBlock>{children}</HeaderBlock>}
        <HeaderBlockSecondary>
          <HeaderUser />
        </HeaderBlockSecondary>
      </WrapperInner>
    </WrapperOuter>
  );
};

export default Header;
