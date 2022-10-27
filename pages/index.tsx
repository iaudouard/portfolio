import { useEffect } from "react";

import type { NextPage } from "next";
import Head from "next/head";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import toast from "react-hot-toast";

import curDot from "cursor-dot";

const Home: NextPage = () => {
  const notify = (message: string) =>
    toast(message, {
      duration: 4000,
      position: "top-center",
      style: {
        backgroundColor: "#1e107a",
        color: "#fff9f2",
      },
      icon: "🔨",
      ariaProps: {
        role: "status",
        "aria-live": "polite",
      },
    });

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let tl = gsap.timeline({
      defaults: { ease: "power4.inOut", duration: 1.5 },
    });
    tl.to("h1", {
      clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
      opacity: 1,
      y: 0,
    });
  }, []);

  useEffect(() => {
    notify(
      "This website is still under construction, but feel free to contact me for work."
    );
  }, []);

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
        <section className="flex h-screen w-screen items-center px-6 home">
          <h1 className="font-medium text-9xl init-title text-theme-accent font-playfair">
            <span className="title-span">Ivan</span>
            <br />
            <span className="title-span">Audouard</span>
          </h1>
        </section>
      </main>
    </>
  );
};

export default Home;
