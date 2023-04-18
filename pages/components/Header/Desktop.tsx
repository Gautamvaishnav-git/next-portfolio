import Link from "next/link";
import React from "react";

const Desktop = () => {
  return (
    <nav className="w-full bg-gray-900/80 backdrop-blur navbar shadow-2xl shadow-gray-600/5 border-b border-gray-800 peer-checked:navbar-active">
      <div className="xl:container m-auto px-6 md:px-12 lg:px-6">
        <div className="flex flex-wrap items-center justify-between gap-6 md:py-3 md:gap-0 lg:py-5">
          <div className="w-full items-center flex justify-between lg:w-auto">
            <Link
              href="/"
              className="relative text-3xl text-white font-bold z-10"
              aria-label="logo"
            >
              Gautam
            </Link>
          </div>
          <div className="hidden w-full flex-wrap justify-end items-center mb-16 space-y-8 p-6 border rounded-3xl shadow-2xl shadow-gray-300/20 bg-gray-800 lg:space-y-0 lg:p-0 lg:m-0 lg:flex md:flex-nowrap lg:bg-transparent lg:w-7/12 lg:shadow-none border-gray-700 lg:border-0">
            <div className="text-gray-300 lg:pr-4">
              <ul className="space-y-6 tracking-wide font-medium text-base lg:text-sm lg:flex lg:space-y-0">
                <li>
                  <Link
                    href="/"
                    className="block md:px-4 transition hover:text-primaryLight"
                  >
                    <span>Home</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="block md:px-4 transition hover:text-primaryLight"
                  >
                    <span>About</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/portfolio"
                    className="block md:px-4 transition hover:text-primaryLight"
                  >
                    <span>Portfolio</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="block md:px-4 transition hover:text-primaryLight"
                  >
                    <span>Contact</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/freelance"
                    className="block md:px-4 transition hover:text-primaryLight"
                  >
                    <span>Freelance</span>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="w-full space-y-2 border-gray-700 flex flex-col -ml-1 sm:flex-row lg:space-y-0 md:w-max lg:border-l">
              <a
                href="./resume.pdf"
                target="_blank"
                download
                className="relative flex h-9 ml-2 items-center justify-center sm:px-6 before:absolute before:inset-0 before:rounded-full before:bg-sky-400 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95"
              >
                <span className="relative text-sm font-semibold text-gray-900">
                  Resume
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Desktop;
