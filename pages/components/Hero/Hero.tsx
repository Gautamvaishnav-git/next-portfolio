import Image from "next/image";
import Social from "./Social";
import { Typewriter } from "react-simple-typewriter";
import { motion, Variants } from "framer-motion";

const Hero = () => {
  const variants: Variants = {
    to: { y: 0 },
    from: { y: 100 },
  };
  return (
    <>
      <div className="relative pt-10 pb-20 bg-gray-900">
        <motion.div
          transition={{ ease: "easeIn", duration: 1 }}
          initial="from"
          whileInView="to"
          viewport={{ once: true }}
          variants={variants}
          className="relative xl:container m-auto px-6 md:px-12 lg:px-6"
        >
          <motion.h1
            transition={{ ease: "easeIn", delay: 0.2 }}
            initial="from"
            whileInView="to"
            viewport={{ once: true }}
            variants={variants}
            className="sm:mx-auto sm:w-10/12 md:w-2/3 font-black text-4xl text-center sm:text-5xl md:text-6xl lg:w-auto lg:text-left xl:text-7xl text-white"
          >
            Full Stack Stack developer
            <br className="lg:block hidden" />{" "}
            <span className="relative block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              <Typewriter
                words={["MEAN/MERN", "Azure, Aws", "System Design"]}
                loop={0}
                cursor
                cursorColor="white"
              />
            </span>
          </motion.h1>
          <motion.div
            className="lg:flex"
            transition={{ ease: "easeIn", delay: 0.4 }}
            initial="from"
            whileInView="to"
            viewport={{ once: true }}
            variants={variants}
          >
            <div className="relative mt-8 md:mt-16 space-y-8 sm:w-10/12 md:w-2/3 lg:ml-0 sm:mx-auto text-center lg:text-left lg:mr-auto lg:w-7/12">
              <p className="sm:text-lg text-gray-300 lg:w-11/12">
                Experience in a variety of industries which includes hands-on
                experience in Node.js, ReactJS, AngularJS, core JavaScript, and
                databases (SQL/NoSql) and Cloud Technologies.
              </p>
              <span className="block font-semibold text-gray-400">
                How to connect with me ?
              </span>

              <Social />
            </div>
            <motion.div
              transition={{ ease: "easeIn", delay: 0.5 }}
              initial="from"
              whileInView="to"
              viewport={{ once: true }}
              variants={variants}
              className="mt-12 md:mt-0 lg:absolute -right-0 sm:right-2 lg:w-7/12"
            >
              <div className="relative w-full">
                <div
                  aria-hidden="true"
                  className="absolute scale-75 md:scale-110 inset-0 m-auto w-full h-full md:w-96 md:h-96 rounded-full rotate-45 bg-gradient-to-r from-sky-500 to-cyan-300 blur-3xl"
                ></div>
                <Image
                  src="https://tailus.io/sources/blocks/tech-startup/preview/images/globalization-cuate.svg"
                  className="relative w-full"
                  alt="illustration"
                  loading="lazy"
                  width="320"
                  height="280"
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default Hero;
