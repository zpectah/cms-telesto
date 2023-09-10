import { Head, Html, Main, NextScript } from 'next/document';
import { CONFIG } from '@/modules/admin';

export default function Document() {
  return (
    <Html lang={CONFIG.LOCALES.DEFAULT}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
