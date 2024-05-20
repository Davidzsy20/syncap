import '../styles/global.scss';

import type { AppProps } from 'next/app';

import Navbar from '@/navigation/Navbar';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
