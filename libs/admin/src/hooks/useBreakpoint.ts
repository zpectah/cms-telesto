import { useEffect, useState } from 'react';
import { Breakpoint } from '../types';
import { BREAKPOINTS } from '../constants';

export const useBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState<Breakpoint>('xs');

  const getKey = (width: number) => {
    let key: Breakpoint = 'xs';

    if (width >= BREAKPOINTS.xs && width < BREAKPOINTS.sm) {
      key = 'xs';
    } else if (width >= BREAKPOINTS.sm && width < BREAKPOINTS.md) {
      key = 'sm';
    } else if (width >= BREAKPOINTS.md && width < BREAKPOINTS.lg) {
      key = 'md';
    } else if (width >= BREAKPOINTS.lg && width < BREAKPOINTS.xl) {
      key = 'lg';
    } else if (width >= BREAKPOINTS.xl) {
      key = 'xl';
    }

    return key;
  };

  const resizeHandler = () => setBreakpoint(getKey(window?.innerWidth));

  useEffect(() => {
    window?.addEventListener('resize', resizeHandler);

    resizeHandler();

    return () => window.removeEventListener('resize', resizeHandler);
    // eslint-disable-next-line
  }, []);

  return {
    breakpoint,
  };
};
