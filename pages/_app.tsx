import "../styles/globals.css";
import type { AppProps } from "next/app";
import "../styles/globals.css";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Nav from "../components/Nav";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Nav />
      <Component {...pageProps} />
      <ToastContainer />
    </>
  );
}

export default MyApp;
