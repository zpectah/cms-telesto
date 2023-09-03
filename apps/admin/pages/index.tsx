import React from 'react';
import type { NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Button } from '@/ui';

export default function Page(props: NextPage) {
  console.log('props', props);

  return (
    <>
      admin page view <Button variant="contained">Iam MUI Button</Button>
      <br />
    </>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [['common']])),
    },
  };
}
