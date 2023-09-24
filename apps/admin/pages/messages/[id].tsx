'use client';

import React from 'react';
import type { NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Messages } from '@/admin';

export default function Page(props: NextPage) {
  return <Messages />;
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: ['/messages/[id]'],
    fallback: true,
  };
}
