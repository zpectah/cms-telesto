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

  useEffect(() => {
    const value = getLocalStorageValue(key);
    setSidebarOpen(value);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    sidebar: {
      open: sidebarOpen,
      toggle: sidebarToggle,
    },
  };
};
