import React from 'react';
import { IconButton } from '@mui/joy';
import { Menu, MenuOpen } from '@mui/icons-material';
import { usePageLayoutContext } from '../../../contexts';

const HeaderSidebarToggle = () => {
  const { sidebarOpen, sidebarToggle } = usePageLayoutContext();

  return (
    <IconButton variant="soft" size="lg" onClick={sidebarToggle}>
      {sidebarOpen ? <MenuOpen /> : <Menu />}
    </IconButton>
  );
};

export default HeaderSidebarToggle;
