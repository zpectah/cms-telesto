import React from 'react';
import Link from 'next/link';
import { Dropdown, MenuButton, Menu, MenuItem } from '@mui/joy';
import { AccountCircle } from '@mui/icons-material';
import { routes } from '../../../config';

const HeaderUser = () => {
  return (
    <Dropdown>
      <MenuButton
        variant="soft"
        color="neutral"
        size="lg"
        startDecorator={<AccountCircle />}
      >
        HeaderUser
      </MenuButton>
      <Menu>
        <MenuItem component={Link} href={routes.profile.path}>
          {routes.profile.name}
        </MenuItem>
        <MenuItem component={Link} href={routes.help.path}>
          {routes.help.name}
        </MenuItem>
        <MenuItem component={Link} href={`${routes.login.path}?logout=true`}>
          Log Out
        </MenuItem>
      </Menu>
    </Dropdown>
  );
};

export default HeaderUser;
