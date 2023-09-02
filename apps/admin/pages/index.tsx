import React from 'react';
import type { NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Button } from '@/ui';

export default function Page(props: NextPage) {
  return (
    <>
      admin page view <Button variant="contained">Iam MUI Button</Button>
      <br />
      <pre>
        <code>{JSON.stringify(props, null, 2)}</code>
      </pre>
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
