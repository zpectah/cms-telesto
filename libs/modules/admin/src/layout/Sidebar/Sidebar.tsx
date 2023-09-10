import React from 'react';
import { styled, Drawer } from '@mui/material';
import { CONFIG } from '../../config';
import { SidebarProps } from './types';
import { Scrollable } from '@/ui';
import SidebarNav from './SidebarNav';

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
  const { open } = props;

  return (
    <Drawer
      open={open}
      variant="persistent"
      anchor="left"
      sx={{
        width: {
          xs: CONFIG.STYLE.SIDEBAR_WIDTH_MOBILE,
          sm: CONFIG.STYLE.SIDEBAR_WIDTH_DESKTOP,
        },
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: {
            xs: CONFIG.STYLE.SIDEBAR_WIDTH_MOBILE,
            sm: CONFIG.STYLE.SIDEBAR_WIDTH_DESKTOP,
          },
          top: {
            xs: CONFIG.STYLE.HEADER_HEIGHT_MOBILE,
            sm: CONFIG.STYLE.HEADER_HEIGHT_DESKTOP,
          },
          height: {
            xs: `calc(100% - ${CONFIG.STYLE.HEADER_HEIGHT_MOBILE})`,
            sm: `calc(100% - ${CONFIG.STYLE.HEADER_HEIGHT_DESKTOP})`,
          },
          boxSizing: 'border-box',
        },
      }}
    >
      <Scrollable>
        <StyledWrapper>
          <StyledPrimary>
            <SidebarNav variant="primary" />
          </StyledPrimary>
          <StyledSecondary>
            <SidebarNav variant="secondary" />
          </StyledSecondary>
        </StyledWrapper>
      </Scrollable>
    </Drawer>
  );
};

export default Sidebar;
