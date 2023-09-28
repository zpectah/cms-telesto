import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { PreloaderBar } from '../components';
import { WithChildren } from '../types';

export interface PreloaderProviderProps extends WithChildren {}

export const PreloaderProvider = (props: PreloaderProviderProps) => {
  const { children } = props;

  const [loading, setLoading] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      setLoading(true);
    };

    const handleRouteChangeComplete = () => {
      setLoading(false);
    };

    router.events.on('routeChangeStart', handleRouteChange);
    router.events.on('routeChangeComplete', handleRouteChangeComplete);

    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
      router.events.off('routeChangeComplete', handleRouteChangeComplete);
    };
  }, [router.events]);

  return (
    <>
      <PreloaderBar loading={loading} />
      {children}
    </>
  );
};
