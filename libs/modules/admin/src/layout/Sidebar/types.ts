import { ReactElement } from 'react';

export interface SidebarProps {
  open: boolean;
}

export type SidebarNavVariantTypes = 'primary' | 'secondary';

export interface SidebarNavItemProps {
  id: number;
  label: string;
  target: string;
  isSelected: boolean;
  icon?: ReactElement;
  options?: { disablePadding?: boolean };
}

export interface SidebarNavItemsProps {
  [key: string]: SidebarNavItemProps[];
}

export interface SidebarNavProps {
  variant: SidebarNavVariantTypes;
}
