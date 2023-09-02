import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Dashboard } from '@/modules/admin';

export default function Page() {
  return <Dashboard />;
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [['common']])),
    },
  };
}
