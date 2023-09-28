import React from 'react';
import { Menu, MenuOpen } from '@mui/icons-material';
import { usePageLayoutContext } from '../../../contexts';
import HeaderButton from './HeaderButton';

const HeaderSidebarToggle = () => {
  const { sidebarOpen, sidebarToggle } = usePageLayoutContext();

  return (
    <HeaderButton onClick={sidebarToggle}>
      {sidebarOpen ? <MenuOpen /> : <Menu />}
    </HeaderButton>
  );
};

export default HeaderSidebarToggle;
