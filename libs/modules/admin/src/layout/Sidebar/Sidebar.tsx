import React from 'react';
import { styled, Drawer } from '@mui/material';
import { ADMIN_CFG } from '../../config';
import { SidebarProps } from './types';
import { Scrollable } from '@/ui';

const StyledWrapper = styled('div')(({ theme }) => ({
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
}));

const StyledPrimary = styled('div')(({ theme }) => ({
  flex: '1',
}));

const StyledSecondary = styled('div')(({ theme }) => ({}));

const Sidebar = (props: SidebarProps) => {
  const { children, open } = props;

  return (
    <Drawer
      open={open}
      variant="persistent"
      anchor="left"
      sx={{
        width: {
          xs: ADMIN_CFG.STYLE.SIDEBAR_WIDTH_MOBILE,
          sm: ADMIN_CFG.STYLE.SIDEBAR_WIDTH_DESKTOP,
        },
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: {
            xs: ADMIN_CFG.STYLE.SIDEBAR_WIDTH_MOBILE,
            sm: ADMIN_CFG.STYLE.SIDEBAR_WIDTH_DESKTOP,
          },
          top: {
            xs: ADMIN_CFG.STYLE.HEADER_HEIGHT_MOBILE,
            sm: ADMIN_CFG.STYLE.HEADER_HEIGHT_DESKTOP,
          },
          height: {
            xs: `calc(100% - ${ADMIN_CFG.STYLE.HEADER_HEIGHT_MOBILE})`,
            sm: `calc(100% - ${ADMIN_CFG.STYLE.HEADER_HEIGHT_DESKTOP})`,
          },
          boxSizing: 'border-box',
        },
      }}
    >
      <Scrollable>
        <StyledWrapper>
          <StyledPrimary>{children}</StyledPrimary>
          <StyledSecondary>secondary</StyledSecondary>
        </StyledWrapper>
      </Scrollable>
    </Drawer>
  );
};

export default Sidebar;
