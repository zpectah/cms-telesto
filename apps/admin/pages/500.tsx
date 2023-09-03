import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Error } from '@/modules/admin';

export default function Page() {
  return <Error errorKey={500} />;
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [['common']])),
    },
  };
}
