import Head from 'next/head';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import {
  ReduxWrapper,
  StylesProvider,
  PageLayoutContextProvider,
  usePageLayout,
  PreloaderProvider,
} from '@/admin';

function App({ Component, pageProps }: AppProps) {
  const pageLayoutContext = usePageLayout();

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <StylesProvider>
        <PageLayoutContextProvider value={pageLayoutContext}>
          <PreloaderProvider>
            <Component {...pageProps} />
          </PreloaderProvider>
        </PageLayoutContextProvider>
      </StylesProvider>
    </>
  );
}

export default ReduxWrapper.withRedux(appWithTranslation(App));
