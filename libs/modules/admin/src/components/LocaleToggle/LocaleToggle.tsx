'use client';

import React from 'react';
import { useRouter } from 'next/router';
import { ADMIN_CFG } from '@/core';
import { Button } from '@/ui';

const LocaleToggle = () => {
  const { locale, replace, pathname } = useRouter();

  return (
    <>
      {ADMIN_CFG.locales.map((item) => (
        <Button
          onClick={() => replace(pathname, '', { locale: item })}
          disabled={item === locale}
        >
          {item}
        </Button>
      ))}
    </>
  );
};

export default LocaleToggle;
