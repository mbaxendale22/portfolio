import '../styles/globals.css';
import 'tailwindcss/tailwind.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Home | MB</title>
        <meta
          name="description"
          content="Matthew Baxendale junior software engineer"
        />
      </Head>
     
        <Component {...pageProps} />
     
    </>
  );
}

export default MyApp;
