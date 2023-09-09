import React, { ReactNode } from 'react';
import { styled } from '@mui/material';
import { ADMIN_CFG } from '@/core';
import { Header } from '../Header';
import { Footer } from '../Footer';

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

const HeaderOffset = styled('div')`
  width: 100%;
  height: ${ADMIN_CFG.STYLE.HEADER_HEIGHT_DESKTOP};
`;

export interface PageLayoutProps {
  children: ReactNode;
  pageKey: string;
  variant?: 'default' | 'centered';
  withoutHeader?: boolean;
  withoutFooter?: boolean;
}

const PageLayout = (props: PageLayoutProps) => {
  const { children, variant = 'default', withoutHeader, withoutFooter } = props;

  return (
    <StyledWrapper
      className={['view-layout-root', `view-layout--${variant}`].join(' ')}
    >
      {!withoutHeader && <Header />}
      <StyledContent centered={variant === 'centered'}>
        {!withoutHeader && <HeaderOffset />}
        {children}
        {!withoutFooter && <Footer />}
      </StyledContent>
    </StyledWrapper>
  );
};

export default PageLayout;
