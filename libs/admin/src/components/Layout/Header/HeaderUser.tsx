import React from 'react';
import Link from 'next/link';
import { Dropdown, MenuButton, Menu, MenuItem } from '@mui/joy';
import { AccountCircle } from '@mui/icons-material';

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
        <MenuItem component={Link} href="/profile">
          Profile
        </MenuItem>
        <MenuItem component={Link} href="/help">
          Help
        </MenuItem>
        <MenuItem component={Link} href="/login?logout=true">
          Log Out
        </MenuItem>
      </Menu>
    </Dropdown>
  );
};

export default HeaderUser;
