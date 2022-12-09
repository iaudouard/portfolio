import { useEffect, useState } from "react";

import type { NextPage } from "next";
import Head from "next/head";

import { toast } from "react-toastify";
import { Hero } from "../components/sections/Hero";
import { useNotification } from "../hooks/useNotification";

const Home: NextPage = () => {
  const notification = useNotification();
  // const [hasNotified, setHasNotified] = useState<boolean>(false);
  // const notify = (message: string) => {
  //   toast(message, {
  //     autoClose: 4000,
  //     position: "top-center",
  //     closeOnClick: true,
  //     theme: "dark",
  //     pauseOnHover: true,
  //     icon: "🔨",
  //   });
  // };

  // useEffect(() => {
  //   if (!hasNotified) {
  //     notify(
  //       "This website is still under construction, but feel free to contact me for work."
  //     );
  //     setHasNotified(true);
  //   }
  // }, []);

  return (
    <>
      <Head>
        <title>Ivan Audouard</title>
        <meta
          name="description"
          content="Ivan Audouard's official portfolio website."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen w-screen bg-theme-bg overflow-x-hidden">
        <Hero />
      </main>
    </>
  );
};

export default Home;
