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
        className="sm:w-3/4 mx-auto backdrop-blur-sm relative sm:p-6 p-2 rounded bg-gradient-to-tl from-green-900/60 to-gray-900/60"
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
                "MERN/MEAN Stack Developer.",
                "Full Stack Developer.",
                "Azure, Aws",
                "System Design",
              ]}
              loop={0}
              cursor
              cursorColor="currentColor"
            />
          </span>
          .
        </h4>

        <p className="pt-8 text-gray-200 leading-8 tracking-wide [word-spacing:5px]">
          <ul className="space-y-4" role="list">
            <li>
              Experience in a variety of industries which includes hands-on
              experience in Node.js, ReactJS, AngularJS, core JavaScript, and
              databases including SQL Server and MongoDB.
            </li>
            <li>
              Possess strong problem-solving skills and a track record of
              collaborating with crossfunctional teams to deliver high-quality
              products.
            </li>
            <li>
              Result-focused and experienced in formulating strategies,
              processes, and business improvements to create a sustainable,
              competitive advantage.
            </li>
            <li>
              Proven ability to manage multiple projects with excellent
              organizational skills.
            </li>
            <li>
              Skilled in all phases of the Software Development Life Cycle
              (SDLC) including Requirement gathering by client interaction,
              Development, Implementation, Integration, Documentation, Testing,
              Builds, Deployments, and Configuration
            </li>
            <li>Good in the Development of REST APIs and Web Service</li>
            <li>Good with Database Management and Development</li>
            <li>
              Good in Configuring and Deploying applications on Microsoft Azure
              Platforms
            </li>
            <li>
              User authentication and authorization between multiple systems,
              servers, environments, and security compliance
            </li>
            <li>
              Design patterns - MVC, SOLID principles, and development best
              practices.
            </li>
            <li>Code versioning tools such as Git.</li>
            <li>
              Hands-on experience with several Azure services including fabrics,
              cognitive search, blob-storage, etc.
            </li>
            <li>
              Having Knowledge of Configuring and Deploying applications on
              Microsoft Azure Platforms
            </li>
            <li>Instruments for memory optimizations and performance tuning</li>
            <li>Software development best practices effective.</li>
          </ul>
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
