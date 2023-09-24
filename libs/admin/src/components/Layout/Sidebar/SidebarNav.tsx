import React from 'react';
import Link from 'next/link';
import {
  List,
  ListItem,
  ListItemButton,
  ListItemDecorator,
  ListItemContent,
} from '@mui/joy';
import { SidebarNavItemProps } from './types';

export interface SidebarNavProps {
  navItems: SidebarNavItemProps[];
}

const SidebarNav = (props: SidebarNavProps) => {
  const { navItems = [] } = props;

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
