import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Settings } from '@/modules/admin';

export default function Page() {
  return <Settings />;
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [['common']])),
    },
  };
}
