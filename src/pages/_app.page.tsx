import { type AppProps } from 'next/app';
import { AuthProvider } from '../context/auth/AuthContext';
import type { NextPageWithLayout } from './page';

import '../styles/globals.css';

interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout;
}

function MyApp({
  Component,
  pageProps: { /*session,*/ ...pageProps },
}: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);
  return <AuthProvider>{getLayout(<Component {...pageProps} />)}</AuthProvider>;
}

export default MyApp;
