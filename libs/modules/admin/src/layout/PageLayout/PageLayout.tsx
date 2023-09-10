import React from 'react';
import { styled } from '@mui/material';
import { CONFIG } from '../../config';
import { Header } from '../Header';
import { PageLayoutProps } from './types';

const StyledWrapper = styled('div')`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const StyledContent = styled('main')<{ centered?: boolean }>`
  flex: 1 1 auto;
  overflow-y: auto;
  ${({ centered }) =>
    centered &&
    `
    align-items: center;
    justify-content: center;
    height: 100%;
    display: flex;
  `}
`;

const HeaderOffset = styled('div')(({ theme }) => ({
  width: '100%',
  height: CONFIG.STYLE.HEADER_HEIGHT_MOBILE,
  [theme.breakpoints.up('sm')]: {
    height: CONFIG.STYLE.HEADER_HEIGHT_DESKTOP,
  },
}));

const PageLayout = (props: PageLayoutProps) => {
  const { children, variant = 'default', withoutHeader } = props;

  return (
    <StyledWrapper
      className={['view-layout-root', `view-layout--${variant}`].join(' ')}
    >
      {!withoutHeader && <Header />}
      <StyledContent centered={variant === 'centered'}>
        {!withoutHeader && <HeaderOffset />}
        {children}
      </StyledContent>
    </StyledWrapper>
  );
};

export default PageLayout;
