// app.js

import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import Head from "next/head";


function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <Head>
        <title>NanoLIMS</title>
        <meta name="description" content="NanoLIMS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default MyApp;
