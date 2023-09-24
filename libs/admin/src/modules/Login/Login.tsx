import React from 'react';
import { useTranslation } from 'next-i18next';
import { useAuthSlice } from '../../hooks';
import { PageLayout } from '../../components';

const Login = () => {
  const { t } = useTranslation();
  const { auth } = useAuthSlice();

  return (
    <PageLayout variant="centered">
      Login module ... {t('test_title')} ...
      {auth ? 'Logged in' : 'Not Logged In'}
    </PageLayout>
  );
};

export default Login;
