import React from 'react';
import { SidebarProps } from './types';

const Sidebar = (props: SidebarProps) => {
  const { children } = props;

  return <div>Sidebar ... {children}</div>;
};

export default Sidebar;
