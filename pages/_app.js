import Layout from "@/components/layout/layout";
import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <meta name="viewport" content="inital-scale=1.0,width=device-width" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
