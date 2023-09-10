'use client';

import React from 'react';
import { useRouter } from 'next/router';
import { CONFIG } from '../../config';
import { Button } from '@/ui';

const LocaleToggle = () => {
  const { locale, replace, pathname } = useRouter();

  // const [value, setValue] = useLocalStorage('username', '');
  // const n = localStorage?.getItem('username');
  // console.log('n', value);
  // useEffect(() => {
  //   setValue('Šulin');
  // }, []);

  const localeToggle = (loc: string) => {
    replace(pathname, '', { locale: loc }).then(() => {
      console.log('Set to local storage here ...', loc);
    });
  };

  return (
    <>
      {CONFIG.LOCALES.LIST.map((loc) => (
        <Button
          key={loc}
          onClick={() => localeToggle(loc)}
          disabled={loc === locale}
        >
          {loc}
        </Button>
      ))}
    </>
  );
};

export default LocaleToggle;
