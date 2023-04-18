import React from "react";
import { motion } from "framer-motion";
import { BiLinkExternal } from "react-icons/bi";
import Image from "next/image";
import { AiFillGithub, AiOutlineLink } from "react-icons/ai";

const Card = (props: propsTypes) => {
  const {
    projectName,
    ProjectsLength,
    index,
    image,
    projectLinks,
    description,
    technologies,
  } = props;
  return (
    <motion.div
      initial={{ y: 100 }}
      whileInView={{ y: 0 }}
      transition={{ ease: "easeIn", duration: index / 10 + 0.2 }}
      viewport={{ once: true }}
      className="sm:w-1/3 project bg-slate-800 p-4 rounded relative lg:h-auto overflow-hidden"
      style={{ flexGrow: ProjectsLength === index + 1 ? "0.3" : "1" }}
    >
      <Image
        alt={projectName}
        width="1200"
        height="720"
        src={image}
        className="w-auto lg:h-full mx-auto"
      />
      <div className="lg:absolute info -bottom-50 left-0 w-full h-fit sm:p-4 p-2 bg-gray-800">
        <a
          href={
            projectLinks[1]?.link ? projectLinks[1].link : projectLinks[0].link
          }
          target="_blank"
          className="font-bold text-sky-500 text-xl capitalize flex gap-1 items-center hover:gap-3 duration-200"
        >
          <span>{projectName}</span>
          <BiLinkExternal />
        </a>
        <p className="py-2 text-gray-100">{description}</p>
        <div className="flex flex-wrap gap-2 items-center pt-2">
          {technologies.map((tech, index) => (
            <p
              key={index}
              className="rounded py-1 px-2 bg-gray-700 text-white sm:grow-0 grow"
            >
              {tech}
            </p>
          ))}
        </div>
        <div className="flex w-full pt-4">
          {projectLinks.map((pLink, index) => (
            <motion.a
              href={pLink.link}
              target="_blank"
              className="w-16 text-white hover:text-sky-500"
              key={index}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {pLink.icon === "git hub" ? (
                <AiFillGithub size={32} />
              ) : (
                <AiOutlineLink size={32} />
              )}
            </motion.a>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Card;

interface propsTypes {
  projectName: string;
  ProjectsLength: number;
  index: number;
  image: string;
  projectLinks: { link: string; icon: string }[];
  description: string;
  technologies: string[];
}
