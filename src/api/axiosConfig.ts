import axios from 'axios';

export const axiosConfig = () => {
  const isDev = process.env.NODE_ENV !== 'production';
  const baseURL = isDev ? 'http://localhost:8000' : 'https://syncap.ai';

  const axiosInstance = axios.create({
    baseURL,
  });

  axiosInstance.interceptors.request.use((config: any) => {
    const modifiedConfig = {
      ...config,
      headers: {
        ...config.headers,
        // 'X-App-Version': process.env.NEXT_PUBLIC_APP_VERSION,
      },
    };
    return modifiedConfig;
  });

  return axiosInstance;
};

export const SYNCAP_SERVICE = axiosConfig();
