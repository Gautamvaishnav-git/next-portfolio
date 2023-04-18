import Image from "next/image";
import { motion } from "framer-motion";

const Social = ({
  followers,
  connections,
  link,
  imageLink,
  index,
}: {
  followers: number;
  connections: number;
  link: string;
  imageLink: string;
  index: number;
}) => {
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
            alt="social link"
          />
        </a>
        <div className="flex flex-col gap-1 w-full">
          <p className="text-md flex items-center gap-2 pb-1 leading-4 font-semibold text-sky-500 capitalize bg-gray-700 p-2 rounded grow">
            {connections}+
            <span className="text-gray-400 font-normal text-sm grow text-right">
              connections
            </span>
          </p>
          <p className="text-md flex items-center gap-2 pb-1 leading-4 font-semibold text-sky-500 capitalize bg-gray-700 p-2 rounded grow">
            {followers}+
            <span className="text-gray-400 font-normal text-sm grow text-right">
              followers
            </span>
          </p>
        </div>
      </motion.div>
    </>
  );
};
export default Social;
