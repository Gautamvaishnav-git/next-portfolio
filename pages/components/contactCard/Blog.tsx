import Image from "next/image";
import { motion } from "framer-motion";

const Blog = (props: propTypes) => {
  const { reactions, blogs, link, imageLink, readings, index } = props;

  return (
    <>
      <motion.div
        initial={{ y: 100 }}
        whileInView={{ y: 0 }}
        transition={{ ease: "easeIn", duration: index / 10 + 0.2 }}
        viewport={{ once: true }}
        className="p-2 rounded sm:w-fit sm:grow-0 grow bg-gray-800 hover:bg-gradient-to-b hover:from-sky-500/30 duration-150 flex flex-col items-center gap-2"
      >
        <a href={link} className="pb-2" target="_blank">
          <Image
            src={imageLink}
            className="w-16 object-contain"
            width="100"
            height="100"
            alt="blog link"
          />
        </a>
        <div className="flex flex-col gap-1 w-full">
          <p className="text-md pb-1 flex items-center gap-6 leading-4 font-semibold text-sky-500 capitalize bg-gray-700 p-2 rounded grow">
            {blogs}+
            <span className="text-gray-400 font-normal text-sm text-right grow">
              blogs
            </span>
          </p>
          <p className="text-md pb-1 flex items-center gap-6 leading-4 font-semibold text-sky-500 capitalize bg-gray-700 p-2 rounded grow">
            {reactions}+
            <span className="text-gray-400 font-normal text-sm text-right grow">
              reactions
            </span>
          </p>
          <p className="text-md pb-1 flex items-center gap-6 leading-4 font-semibold text-sky-500 capitalize bg-gray-700 p-2 rounded grow">
            {readings}+
            <span className="text-gray-400 font-normal text-sm text-right grow">
              readings
            </span>
          </p>
        </div>
      </motion.div>
    </>
  );
};
export default Blog;

interface propTypes {
  reactions: number;
  blogs: number;
  link: string;
  imageLink: string;
  readings: number;
  index: number;
}
