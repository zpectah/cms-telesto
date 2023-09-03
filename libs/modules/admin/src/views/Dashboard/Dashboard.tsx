'use client';

import React, { useContext } from 'react';
import { useTranslation } from 'next-i18next';
import { useCounterSlice } from '@/store';
import { useTheme } from '@/core';
import { LocaleToggle } from '../../components';
import { ViewLayout } from '../../layout';
import { ColorModeContext } from '@/common';

const Dashboard = () => {
  const { t } = useTranslation();
  const { counter, increment, decrement, incrementByAmount } =
    useCounterSlice();
  const theme = useTheme();

  const colorMode = useContext(ColorModeContext);

  console.log('theme', theme);

  return (
    <ViewLayout pageKey="dashboard" sidebar={<>sidebar ?</>}>
      Dashboard View ... {t('test_title')}
      <br />
      <br />
      <LocaleToggle />
      <br />
      <br />
      <div>
        <h1>Counter: {counter.value}</h1>
        <button onClick={() => increment()}>Increment</button>
        <button onClick={() => decrement()}>Decrement</button>
        <button onClick={() => incrementByAmount(23)}>Add 23 to value</button>
      </div>
      <div>
        <button onClick={() => colorMode.toggleColorMode()}>
          theme {theme.palette.mode}
        </button>
      </div>
    </ViewLayout>
  );
};

export default Dashboard;
