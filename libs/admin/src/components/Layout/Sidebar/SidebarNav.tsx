import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  List,
  ListItem,
  ListItemButton,
  ListItemDecorator,
  ListItemContent,
} from '@mui/joy';

const SidebarNav = () => {
  const { pathname } = useRouter();

  const navItems = [
    {
      id: 0,
      label: 'Dashboard',
      path: '/',
      icon: null,
      selected: pathname === '/',
    },
    {
      id: 1,
      label: 'Posts',
      path: '/posts',
      icon: null,
      selected: !!pathname.match('/posts'),
    },
    {
      id: 3,
      label: 'Help',
      path: '/help',
      icon: null,
      selected: pathname === '/help',
    },
    {
      id: 4,
      label: 'Settings',
      path: '/settings',
      icon: null,
      selected: !!pathname.match('/settings'),
    },
    {
      id: 6,
      label: 'Profile',
      path: '/profile',
      icon: null,
      selected: !!pathname.match('/profile'),
    },
  ];

  return (
    <List size="lg" sx={{ paddingTop: 0, paddingBottom: 0 }}>
      {navItems.map((item) => (
        <ListItem key={item.id}>
          <ListItemButton
            component={Link}
            href={item.path}
            selected={item.selected}
          >
            {item.icon && <ListItemDecorator>{item.icon}</ListItemDecorator>}
            <ListItemContent>{item.label}</ListItemContent>
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export default SidebarNav;
