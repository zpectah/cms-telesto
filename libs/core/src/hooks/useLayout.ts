import { useEffect, useState } from 'react';
import { getLocalStorageValue, setLocalStorageValue } from '../utils';

export interface UseLayoutReturn {
  sidebar: {
    open: boolean;
    toggle: () => void;
  };
}

export const useLayout = (key: string): UseLayoutReturn => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  const sidebarToggle = () => {
    const value = !sidebarOpen;
    setSidebarOpen(!sidebarOpen);
    setLocalStorageValue(key, value);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => setSidebarOpen(getLocalStorageValue(key)), []);

  return {
    sidebar: {
      open: sidebarOpen,
      toggle: sidebarToggle,
    },
  };
};
