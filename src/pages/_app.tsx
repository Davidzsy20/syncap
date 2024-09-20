import '../styles/global.scss';

import type { AppProps } from 'next/app';
import { FormProvider, useForm } from 'react-hook-form';
import { Toaster } from 'sonner';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <Toaster />

      <Component {...pageProps} />
    </FormProvider>
  );
};

export default MyApp;
