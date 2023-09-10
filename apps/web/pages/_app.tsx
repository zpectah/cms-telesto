import Head from 'next/head';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import { CssBase, ReduxProvider, ThemeProvider, useThemeMode } from '@/core';
import {
  webTheme,
  ColorModeContextProvider,
  LOCAL_STORAGE_THEME_KEY,
} from '@/modules/web';
import { webStore } from '@/store';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App({ Component, pageProps }: AppProps) {
  const { colorMode, theme } = useThemeMode(webTheme, LOCAL_STORAGE_THEME_KEY);

  const themeContext = {
    theme: theme.palette.mode,
    toggle: colorMode.toggle,
  };

  return (
    <ReduxProvider store={webStore}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ColorModeContextProvider value={themeContext}>
        <ThemeProvider theme={theme}>
          <CssBase />
          <Component {...pageProps} />
        </ThemeProvider>
      </ColorModeContextProvider>
    </ReduxProvider>
  );
}

export default appWithTranslation(App);
