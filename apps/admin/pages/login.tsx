import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Login } from '@/modules/admin';

export default function Page() {
  return <Login />;
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [['common']])),
    },
  };
}
