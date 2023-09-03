'use client';

import React from 'react';
import { useTranslation } from 'next-i18next';
import { LocaleToggle } from '../../components';

import { useDispatch, useSelector } from 'react-redux';
import {
  counterIncrement,
  counterDecrement,
  AdminStateProps,
  AppDispatchProps,
} from '@/store';

const Dashboard = () => {
  const { t } = useTranslation();

  // Redux handling
  const { value } = useSelector((state: AdminStateProps) => state.counter);
  const dispatch: AppDispatchProps = useDispatch();

  return (
    <>
      Dashboard View ... {t('test_title')}
      <br />
      <LocaleToggle />
      <br />
      <div>
        <h1>Counter: {value}</h1>
        <button onClick={() => dispatch(counterIncrement())}>Increment</button>
        <button onClick={() => dispatch(counterDecrement())}>Decrement</button>
      </div>
    </>
  );
};

export default Dashboard;
