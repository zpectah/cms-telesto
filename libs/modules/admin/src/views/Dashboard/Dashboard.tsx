'use client';

import React from 'react';
import { useTranslation } from 'next-i18next';
import { LocaleToggle } from '../../components';
import { useCounterSlice } from '@/store';

const Dashboard = () => {
  const { t } = useTranslation();
  const { counter, increment, decrement, incrementByAmount } =
    useCounterSlice();

  return (
    <>
      Dashboard View ... {t('test_title')}
      <br />
      <LocaleToggle />
      <br />
      <div>
        <h1>Counter: {counter.value}</h1>
        <button onClick={() => increment()}>Increment</button>
        <button onClick={() => decrement()}>Decrement</button>
        <button onClick={() => incrementByAmount(23)}>Add 23 to value</button>
      </div>
    </>
  );
};

export default Dashboard;
