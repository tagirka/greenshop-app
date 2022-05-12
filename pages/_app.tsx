import "../styles/globals.css";
import type { AppProps } from "next/app";
import { FC } from "react";
import Head from "next/head";
import { AppContextProvider, initialContext } from "../context/appContext";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { refetchOnWindowFocus: false },
  },
});

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>GreenShop</title>
      </Head>
      <QueryClientProvider client={queryClient}>
        <AppContextProvider {...initialContext}>
          <Component {...pageProps} />
        </AppContextProvider>
      </QueryClientProvider>
    </>
  );
};

export default MyApp;
