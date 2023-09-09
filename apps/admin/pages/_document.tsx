import { Head, Html, Main, NextScript } from 'next/document';
import { ADMIN_CFG } from '@/core';

export default function Document() {
  return (
    <Html lang={ADMIN_CFG.LOCALES.DEFAULT}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
