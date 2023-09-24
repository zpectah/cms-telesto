import { useEffect, useState } from 'react';
import { localStorage } from '@/core';

const STORAGE_SIDEBAR_KEY = 'sidebar';

export const usePageLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  const sidebarToggle = () => {
    const value = !sidebarOpen;
    setSidebarOpen(value);
    localStorage.setValue(STORAGE_SIDEBAR_KEY, value);
  };

  useEffect(() => {
    const value = localStorage.getValue(STORAGE_SIDEBAR_KEY);

    if (value) setSidebarOpen(value === 'true');
  }, []);

  return {
    sidebarOpen,
    sidebarToggle,
  };
};
