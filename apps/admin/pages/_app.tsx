import Head from 'next/head';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import { adminStore } from '@/store';
import { adminTheme } from '@/modules/admin';
import {
  ReduxProvider,
  ThemeProvider,
  CssBase,
  ColorModeContextProvider,
} from '@/common';
import { useThemeMode } from '@/core';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App({ Component, pageProps }: AppProps) {
  const { colorMode, theme } = useThemeMode(adminTheme);

  return (
    <ReduxProvider store={adminStore}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ColorModeContextProvider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBase />
          <Component {...pageProps} />
        </ThemeProvider>
      </ColorModeContextProvider>
    </ReduxProvider>
  );
}

export default appWithTranslation(App);
