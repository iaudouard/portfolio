import type { NextPage } from "next";
import Head from "next/head";

import { Hero } from "../components/sections/Hero";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Ivan Audouard</title>
        <meta
          name="description"
          content="Ivan Audouard's developer portfolio website."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen w-screen overflow-x-hidden">
        <Hero />
      </main>
    </>
  );
};

export default Home;
