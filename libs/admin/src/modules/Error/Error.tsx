import React from 'react';
import { useTranslation } from 'next-i18next';
import { PageLayout } from '../../components';

const Error = () => {
  const { t } = useTranslation();

  return (
    <PageLayout variant="centered">
      Error module ... {t('test_title')}
    </PageLayout>
  );
};

export default Error;
