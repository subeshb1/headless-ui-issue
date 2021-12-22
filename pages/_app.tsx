import React from "react";
import { ApolloProvider } from "@apollo/client";
import "tailwindcss/tailwind.css";
import client from "lib/apolloClient";
import { AppProps } from "next/app";
import Head from "next/head";
import { Toaster } from "react-hot-toast";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
}

export default App;
