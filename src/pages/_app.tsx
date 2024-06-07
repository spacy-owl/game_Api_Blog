import type { AppProps } from "next/app";
import Head from "next/head";
import React, { useState, useEffect } from "react";
import "@/src/styles/global.css";
import Router from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   Router.events.on("routeChangeStart", () => setLoading(true));
  //   Router.events.on("routeChangeComplete", () => setLoading(false));
  //   Router.events.on("routeChangeError", () => setLoading(false));
  // }, []);

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0"
        />
      </Head>
      {/* {loading && <Loading />} */}
      <Component {...pageProps} />
    </>
  );
}
