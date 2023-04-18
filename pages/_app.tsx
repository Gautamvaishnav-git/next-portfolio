import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Header from "./components/Header/Header";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2300);
  }, []);
  return (
    <>
      {loading ? (
        <div className="w-full h-screen fixed bg-black z-[54]">
          <Image
            src="/preloader.gif"
            alt="preloader"
            width={2000}
            height={2000}
            priority
            className="top-0 w-full h-full mx-auto object-contain hue-rotate-60"
          />
        </div>
      ) : (
        <>
          <Header />
          <Component {...pageProps} />
        </>
      )}
    </>
  );
}
