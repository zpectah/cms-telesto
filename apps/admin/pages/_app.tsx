import type { AppProps } from 'next/app';
// import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  // TODO -> some wrapper (ThemeProvider, etc)
  return <Component {...pageProps} />;
}
