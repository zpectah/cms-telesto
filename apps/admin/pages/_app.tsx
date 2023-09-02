import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import CssBaseline from '@mui/material/CssBaseline';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <CssBaseline />
      <Component {...pageProps} />
    </>
  );
}

export default appWithTranslation(App);
