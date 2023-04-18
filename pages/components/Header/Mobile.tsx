import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
const MobileMenu = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <motion.div>
      <div>
        <div className="flex justify-between items-center bg-gray-900/80 shadow-gray-600/5 border-b border-gray-800 w-full p-4">
          <Link
            href="/"
            className="relative text-3xl text-white font-bold z-10"
            aria-label="logo"
          >
            Gautam
          </Link>
          <label
            htmlFor="hbr"
            className="block relative z-20 cursor-pointer lg:hidden"
            onClick={() => setToggle(!toggle)}
          >
            <div
              aria-hidden="true"
              className="m-auto h-0.5 w-5 rounded bg-gray-300 transition duration-300"
            ></div>
            <div
              aria-hidden="true"
              className="m-auto mt-2 h-0.5 w-5 rounded bg-gray-300 transition duration-300"
            ></div>
          </label>
        </div>

        {/* main menu */}

        <motion.ul
          style={{ display: toggle ? "block" : "none" }}
          initial={{ y: -100 }}
          whileInView={{ y: 0 }}
          className="space-y-6 text-white tracking-wide font-medium text-base bg-slate-900/80 py-4"
        >
          <li>
            <Link
              href="/"
              className="block px-4 transition hover:text-primary hover:text-primaryLight border-b pb-2 border-sky-500/30"
              onClick={() => setToggle(!toggle)}
            >
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="block px-4 transition hover:text-primary hover:text-primaryLight border-b pb-2 border-sky-500/30"
              onClick={() => setToggle(!toggle)}
            >
              <span>About</span>
            </Link>
          </li>
          <li>
            <Link
              href="/portfolio"
              className="block px-4 transition hover:text-primary hover:text-primaryLight border-b pb-2 border-sky-500/30"
              onClick={() => setToggle(!toggle)}
            >
              <span>Portfolio</span>
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="block px-4 transition hover:text-primary hover:text-primaryLight border-b pb-2 border-sky-500/30"
              onClick={() => setToggle(!toggle)}
            >
              <span>Contact</span>
            </Link>
          </li>
          <li>
            <Link
              href="/freelance"
              className="block px-4 transition hover:text-primary hover:text-primaryLight border-b pb-2 border-sky-500/30"
              onClick={() => setToggle(!toggle)}
            >
              <span>Freelance</span>
            </Link>
          </li>
        </motion.ul>
      </div>
    </motion.div>
  );
};

export default MobileMenu;
