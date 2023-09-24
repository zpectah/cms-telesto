import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export const useDetailDrawer = (
  id: number | string | undefined,
  path: string,
  timeout = 250
) => {
  const [open, setOpen] = useState<boolean>(false);

  const router = useRouter();

  const closeHandler = () => {
    setOpen(false);
    setTimeout(() => router.push(path), timeout);
  };

  useEffect(() => {
    if (id) setOpen(!!id);
  }, [id]);

  return {
    open,
    closeHandler,
  };
};
