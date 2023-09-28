import React from 'react';
import { useRouter } from 'next/router';
import { List, ListItem, ListItemButton, ListItemContent } from '@mui/joy';

export type VerticalMenuItemProps = {
  id: number;
  label: string;
  path: string;
  disabled?: boolean;
  selected?: boolean;
};

export interface VerticalMenuProps {
  items: VerticalMenuItemProps[];
}

const VerticalMenu = (props: VerticalMenuProps) => {
  const { items = [] } = props;

  const { replace } = useRouter();

  return (
    <List>
      {items.map((item) => (
        <ListItem key={item.id}>
          <ListItemButton
            onClick={() => replace(item.path)}
            disabled={item.disabled}
            selected={item.selected}
          >
            <ListItemContent>{item.label}</ListItemContent>
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export default VerticalMenu;
