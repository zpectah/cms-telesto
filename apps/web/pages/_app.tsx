import Head from 'next/head';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import { webStore } from '@/store';
import { webTheme } from '@/modules/web';
import { ReduxProvider, ThemeProvider, CssBase } from '@/common';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App({ Component, pageProps }: AppProps) {
  return (
    <ReduxProvider store={webStore}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <CssBase />
      <ThemeProvider theme={webTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </ReduxProvider>
  );
}

export default appWithTranslation(App);
