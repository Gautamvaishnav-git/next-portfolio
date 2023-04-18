import WhoIAm from "../components/about/whoIAm";
import { motion } from "framer-motion";

const About = () => {
  return (
    <>
      <div className="sm:px-4 px-2 pt-20 pb-4 bg-slate-900 bg-[url('/aboutBG.webp')] bg-no-repeat bg-cover">
        <div>
          <motion.h2
            initial={{ y: 200 }}
            whileInView={{ y: 0 }}
            transition={{ ease: "easeIn" }}
            viewport={{ once: true }}
            className="sm:text-5xl text-3xl font-bold text-sky-500 text-center pb-20"
          >
            Who am I?
          </motion.h2>
          <WhoIAm />
        </div>
      </div>
    </>
  );
};

export default About;
