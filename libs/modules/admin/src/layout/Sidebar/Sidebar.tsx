import React from 'react';
import { Drawer } from '@mui/material';
import { ADMIN_CFG } from '../../config';
import { SidebarProps } from './types';

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
      {children}
    </Drawer>
  );
};

export default Sidebar;
