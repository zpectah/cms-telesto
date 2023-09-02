'use client';

import React from 'react';
import { useTranslation } from 'next-i18next';
import { LocaleToggle } from '../../components';

const Dashboard = () => {
  const { t } = useTranslation();

  return (
    <>
      Dashboard View ... {t('test_title')}
      <br />
      <LocaleToggle />
    </>
  );
};

export default Dashboard;
