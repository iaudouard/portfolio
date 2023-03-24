import type { NextPage } from "next";
import Head from "next/head";

import localFont from "next/font/local";

const romanticaStd = localFont({
  src: "../public/assets/fonts/romantica.otf",
});

const Link = ({ href, label, aria }) => {
  return (
    <a href={href} target="_blank" rel="noreferrer" aria-label={aria}>
      <h4 className="text-3xl underline text-blue-500">{label}</h4>
    </a>
  );
};

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

      <main className={"min-h-screen p-8 " + romanticaStd.className}>
        <h1 className="text-6xl sm:text-8xl md:text-9xl ">Ivan Audouard</h1>
        <div>
          <Link
            href="mailto:i@ivanaudouard.com"
            label="Email"
            aria="mailto link"
          />
          <Link
            href="https://github.com/iaudouard"
            label="Github"
            aria="link to github"
          />
          <Link
            href="https://www.linkedin.com/in/ivan-audouard-8073b7211/"
            label="LinkedIn"
            aria="link to linkedin"
          />
          <Link
            href="/assets/Ivan_Audouard_CV.pdf"
            label="CV"
            aria="link to download cv"
          />
        </div>
      </main>
    </>
  );
};

export default Home;
