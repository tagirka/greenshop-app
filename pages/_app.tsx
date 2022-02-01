import "../styles/globals.css";
import type { AppProps } from "next/app";
import { FC } from "react";
import Head from "next/head";
import { AppContextProvider } from "../context/appContext";
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
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="icons/favicon.ico" />
      </Head>
      <QueryClientProvider client={queryClient}>
        <AppContextProvider>
          <Component {...pageProps} />
        </AppContextProvider>
      </QueryClientProvider>
    </>
  );
};

export default MyApp;
