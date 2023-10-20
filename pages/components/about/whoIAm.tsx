import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

const WhoIAm = () => {
  return (
    <>
      <motion.div
        initial={{ y: 100 }}
        whileInView={{ y: 0 }}
        transition={{ ease: "easeIn", delay: 0.1 }}
        className="sm:w-3/4 mx-auto relative sm:p-6 p-2 rounded bg-gradient-to-tl from-green-900/60 to-gray-900/60"
      >
        <Image
          src="/gautam.webp"
          alt="gautam"
          width="600"
          height="600"
          draggable="false"
          className="object-contain rounded-full absolute sm:translate-x-0 left-[0%] right-[0%] mx-auto sm:left-auto md:right-10 sm:-right-10 -top-[4rem] border-8 border-slate-900 w-44 h-44"
        />
        <h4 className="sm:text-5xl text-3xl font-bold bg-gradient-to-tr from-green-500 via-sky-500 to-green-500 bg-clip-text leading-10 text-transparent sm:p-0 pt-32">
          Gautam Vaishnav
          <br />
          <span className="text-white font-semibold sm:text-2xl text-xl">
            <Typewriter
              words={[
                "MERN Stack Developer.",
                "Frontend Developer.",
                "Backend Developer.",
                "NodeJs Developer.",
              ]}
              loop={0}
              cursor
              cursorColor="currentColor"
            />
          </span>
          .
        </h4>

        <p className="pt-8 text-gray-200 leading-8 tracking-wide [word-spacing:5px]">
          As a Full-Stack developer, I bring many skills and
          experience. I am proficient in using NoSql, SQL databases, and NoddJs frameworks like Express and NestJs to build dynamic, modern and scalable web applications that meet
          the needs of clients and users alike.
          <br />I have a strong understanding of front-end development,
          including React, Next, and Typescript, and I am able to create
          responsive and user-friendly interfaces that provide an engaging user
          experience. Additionally, I have expertise in server-side development
          using Node.js, Express, and NestJS and I am able to create robust and scalable
          back-end systems that can handle high volumes of traffic. <br /> I am
          also skilled in using NoSql and Sql databases to create and manage databases. I have expertise
          in React/Next, and I am able to create dynamic user interfaces that respond
          quickly to user input, making your applications more efficient and
          effective.
        </p>
        <motion.a
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 1 }}
          href="mailto:gauravvaishnav8690@gmail.com"
          className="mt-4 block py-2 px-4 bg-sky-900 w-fit rounded hover:bg-sky-700 border font-medium border-transparent hover:border-gray-700 duration-200 text-white"
        >
          {"Let's"} Work together
        </motion.a>
      </motion.div>
    </>
  );
};
export default WhoIAm;
