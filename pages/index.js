import Head from "next/head";
import Header from "../components/Header";
import Heroes from "../components/Blobs";

export default function Home() {
  return (
    <div>
      <Head>
        <title>SEEQ</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Heroes />

      <>

    </div>
  );
}
