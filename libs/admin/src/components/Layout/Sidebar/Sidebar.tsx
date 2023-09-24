import React from 'react';
import { styled } from '@mui/joy';
import { STYLES } from '../../../constants';
import { WithChildren } from '../../../types';
import SidebarNav from './SidebarNav';

export interface SidebarProps extends Partial<WithChildren> {
  sidebarOpen: boolean;
}

const WrapperOuter = styled('aside', {
  shouldForwardProp: (prop) => prop !== 'sidebarOpen',
})<{
  sidebarOpen: boolean;
}>(({ theme, sidebarOpen }) => ({
  width: STYLES.SIDEBAR.WIDTH.DESKTOP,
  height: `calc(100% - ${STYLES.HEADER.HEIGHT})`,
  position: 'fixed',
  top: STYLES.HEADER.HEIGHT,
  left: sidebarOpen ? 0 : `calc(${STYLES.SIDEBAR.WIDTH.DESKTOP} * -1)`,
  backgroundColor: theme.vars.palette.background.surface,
  overflow: 'hidden',
  transition: 'left .125s ease-in-out 0s',
}));
const WrapperMiddle = styled('div')({
  width: 'calc(100% + 30px)',
  height: '100%',
  position: 'absolute',
  top: 0,
  left: 0,
  overflowY: 'auto',
});
const WrapperInner = styled('div')({
  width: 'calc(100% - 30px)',
  height: 'auto',
  minHeight: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
});
const SidebarBlock = styled('div')(({ theme }) => ({}));

const Sidebar = (props: SidebarProps) => {
  const { children, sidebarOpen } = props;

  return (
    <WrapperOuter sidebarOpen={sidebarOpen}>
      <WrapperMiddle>
        <WrapperInner>
          <SidebarBlock>
            <SidebarNav />
          </SidebarBlock>
          {children && <SidebarBlock>{children}</SidebarBlock>}
        </WrapperInner>
      </WrapperMiddle>
    </WrapperOuter>
  );
};

export default Sidebar;
