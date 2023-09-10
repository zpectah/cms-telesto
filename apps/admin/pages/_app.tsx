import Head from 'next/head';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import {
  CssBase,
  ReduxProvider,
  ThemeProvider,
  useThemeMode,
  useLayout,
} from '@/core';
import {
  ColorModeContextProvider,
  LOCAL_STORAGE_SIDEBAR_KEY,
  LOCAL_STORAGE_THEME_KEY,
  LayoutContextProvider,
  adminTheme,
} from '@/modules/admin';
import { adminStore } from '@/store';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App({ Component, pageProps }: AppProps) {
  const { colorMode, theme } = useThemeMode(
    adminTheme,
    LOCAL_STORAGE_THEME_KEY
  );
  const { sidebar } = useLayout(LOCAL_STORAGE_SIDEBAR_KEY);

  const themeContext = {
    theme: theme.palette.mode,
    toggle: colorMode.toggle,
  };
  const layoutContext = {
    open: sidebar.open,
    toggle: sidebar.toggle,
  };

  return (
    <ReduxProvider store={adminStore}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ColorModeContextProvider value={themeContext}>
        <ThemeProvider theme={theme}>
          <LayoutContextProvider value={layoutContext}>
            <CssBase enableColorScheme />
            <Component {...pageProps} />
          </LayoutContextProvider>
        </ThemeProvider>
      </ColorModeContextProvider>
    </ReduxProvider>
  );
}

export default appWithTranslation(App);
