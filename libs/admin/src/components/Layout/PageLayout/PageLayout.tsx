import React, { ReactNode, useMemo } from 'react';
import { styled } from '@mui/joy';
import { STYLES } from '../../../constants';
import { WithChildren } from '../../../types';
import { usePageLayoutContext } from '../../../contexts';
import { Header } from '../Header';
import { Sidebar } from '../Sidebar';
import { Footer } from '../Footer';

export interface PageLayoutProps extends WithChildren {
  variant?: 'default' | 'centered';
  sidebar?: ReactNode;
}

const OuterWrapper = styled('div')({
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  position: 'fixed',
  top: 0,
  left: 0,
  overflow: 'hidden',
});
const MiddleWrapper = styled('div', {
  shouldForwardProp: (prop) => prop !== 'centered',
})<{ centered?: boolean }>(({ centered }) =>
  centered
    ? {
        width: '100%',
        height: '100vh',
        position: 'fixed',
        top: 0,
        left: 0,
        overflowY: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }
    : { flex: 1 }
);
const InnerWrapper = styled('div', {
  shouldForwardProp: (prop) => prop !== 'sidebarOpen',
})<{
  sidebarOpen: boolean;
}>(({ theme, sidebarOpen }) => ({
  width: sidebarOpen ? `calc(100% - ${STYLES.SIDEBAR.WIDTH.DESKTOP})` : '100%',
  height: `calc(100% - ${STYLES.HEADER.HEIGHT})`,
  position: 'fixed',
  top: STYLES.HEADER.HEIGHT,
  right: 0,
  backgroundColor: theme.vars.palette.background.body,
  display: 'flex',
  flexDirection: 'column',
  overflowY: 'auto',
  transition: 'width .125s ease-in-out 0s',
}));
const Content = styled('main', {
  shouldForwardProp: (prop) => prop !== 'centered',
})<{ centered?: boolean }>(({ centered }) =>
  centered ? { height: 'auto' } : { flex: 1 }
);

const PageLayout = (props: PageLayoutProps) => {
  const { children, variant = 'default', sidebar } = props;

  const { sidebarOpen } = usePageLayoutContext();

  return useMemo(() => {
    if (variant === 'centered') {
      return (
        <OuterWrapper>
          <MiddleWrapper centered>
            <Content centered>{children}</Content>
          </MiddleWrapper>
        </OuterWrapper>
      );
    }

    return (
      <OuterWrapper>
        <Header />
        <MiddleWrapper>
          <Sidebar sidebarOpen={sidebarOpen} children={sidebar} />
          <InnerWrapper sidebarOpen={sidebarOpen}>
            <Content>{children}</Content>
            <Footer />
          </InnerWrapper>
        </MiddleWrapper>
      </OuterWrapper>
    );
  }, [variant, sidebarOpen, sidebar, children]);
};

export default PageLayout;
