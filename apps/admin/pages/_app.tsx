import Head from 'next/head';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import { adminStore } from '@/store';
import { adminTheme } from '@/modules/admin';
import { ReduxProvider, ThemeProvider, CssBase } from '@/common';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App({ Component, pageProps }: AppProps) {
  return (
    <ReduxProvider store={adminStore}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <CssBase />
      <ThemeProvider theme={adminTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </ReduxProvider>
  );
}

export default appWithTranslation(App);
