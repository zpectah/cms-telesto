import { useState } from 'react';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import { adminStore } from '@/store';
import { adminTheme } from '@/modules/admin';
import {
  ColorModeContextProvider,
  LayoutContextProvider,
  CssBase,
  ReduxProvider,
  ThemeProvider,
  useThemeMode,
} from '@/core';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App({ Component, pageProps }: AppProps) {
  const { colorMode, theme } = useThemeMode(adminTheme);

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const sidebarToggle = () => setSidebarOpen(!sidebarOpen);

  return (
    <ReduxProvider store={adminStore}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ColorModeContextProvider
        value={{ theme: theme.palette.mode, toggle: colorMode.toggleColorMode }}
      >
        <ThemeProvider theme={theme}>
          <LayoutContextProvider
            value={{ open: sidebarOpen, toggle: sidebarToggle }}
          >
            <CssBase enableColorScheme />
            <Component {...pageProps} />
          </LayoutContextProvider>
        </ThemeProvider>
      </ColorModeContextProvider>
    </ReduxProvider>
  );
}

export default appWithTranslation(App);
