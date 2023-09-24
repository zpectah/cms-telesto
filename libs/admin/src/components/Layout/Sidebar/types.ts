import { ReactNode } from 'react';

export interface SidebarNavItemProps {
  id: number | string;
  label: string;
  path: string;
  icon: ReactNode | null;
  selected: boolean;
}
