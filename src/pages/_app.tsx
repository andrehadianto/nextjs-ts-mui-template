import '../styles/globals.css';
import { ThemeProvider } from '@mui/material/styles';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import { PageHead } from '@/common/components/PageHead';

import theme from '@/theme';

export const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <PageHead />
      </Head>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default App;
