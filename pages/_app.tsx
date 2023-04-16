import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <>
      {loading && (
        <Image
          src="/loading.gif"
          alt="loading"
          width={2000}
          height={2000}
          className="fixed top-0 h-screen w-auto z-[54]"
        />
      )}
      <Header />
      <Component {...pageProps} />
    </>
  );
}
