import '../styles/global.scss';

import type { AppProps } from 'next/app';
import React, { createContext, useState } from 'react';
import { Toaster } from 'sonner';

export interface DataContextType {
  data: any; // Replace 'any' with a more specific type if possible
  setData: React.Dispatch<React.SetStateAction<any>>;
}
export const DataContext = createContext<DataContextType | undefined>(
  undefined
);

export const LOCAL_WORKSPACE = 'http://localhost:3000';
const PROD_WORKSPACE = 'https://workspace.syncap.ai';
export const API_BASE_URL = 'https://api.syncap.ai';
export const landingPageBaseUrl = 'https://www.syncap.ai';
export const workspaceBaseUrl = PROD_WORKSPACE;
const MyApp = ({ Component, pageProps }: AppProps) => {
  const [data, setData] = useState({});
  return (
    <DataContext.Provider value={{ data, setData }}>
      <Toaster />

      <Component {...pageProps} />
    </DataContext.Provider>
  );
};

export default MyApp;
