import React, { ReactNode } from 'react';

export interface SidebarProps {
  children?: ReactNode;
}

const Sidebar = (props: SidebarProps) => {
  const { children } = props;

  return <div>Sidebar ... {children}</div>;
};

export default Sidebar;
