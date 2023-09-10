import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import { SidebarNavProps, SidebarNavItemsProps } from './types';

const SidebarNav = (props: SidebarNavProps) => {
  const { variant } = props;

  const { pathname } = useRouter();

  const menuItems: SidebarNavItemsProps = {
    primary: [
      {
        id: 1,
        label: 'Dashboard',
        target: '/dashboard',
        isSelected: pathname === '/dashboard',
        icon: <InboxIcon />,
        options: { disablePadding: true },
      },
      {
        id: 2,
        label: 'Settings',
        target: '/settings',
        isSelected: pathname === '/settings',
        icon: <DraftsIcon />,
        options: { disablePadding: true },
      },
      {
        id: 3,
        label: 'Login',
        target: '/login',
        isSelected: pathname === '/login',
        icon: <InboxIcon />,
        options: { disablePadding: true },
      },
    ],
    secondary: [
      {
        id: 1,
        label: 'Settings',
        target: '/settings',
        isSelected: pathname === '/settings',
        icon: <InboxIcon />,
        options: { disablePadding: true },
      },
      {
        id: 2,
        label: 'Help',
        target: '/help',
        isSelected: pathname === '/help',
        icon: <DraftsIcon />,
        options: { disablePadding: true },
      },
    ],
  };

  return (
    <nav aria-label="main mailbox folders">
      <List disablePadding>
        {menuItems[variant].map(
          ({ id, label, target, isSelected, icon, options }) => {
            return (
              <ListItem key={id} {...options}>
                <ListItemButton
                  component={Link}
                  href={target}
                  selected={isSelected}
                >
                  {icon && <ListItemIcon>{icon}</ListItemIcon>}
                  <ListItemText primary={label} />
                </ListItemButton>
              </ListItem>
            );
          }
        )}
      </List>
    </nav>
  );
};

export default SidebarNav;
