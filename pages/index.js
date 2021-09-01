import Head from "next/head";
import Header from "../components/Header";
import Blobs from "../components/Blobs";
import Heroes from "../components/Heroes";

export default function Home() {
  return (
    <div>
      <Head>
        <title>SEEQ</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Blobs />
      <main className="max-w-7xl mx-auto px-4 sm:px-8 z-20 relative pt-20">
        <Heroes />
      </main>
    </div>
  );
}
