import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";

const WhoIAm = () => {
  return (
    <>
      <div className="sm:w-3/4 mx-auto relative sm:p-6 p-2 rounded bg-gradient-to-tl from-green-900/60 to-gray-900/60">
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
          As a MERN stack developer, I bring a wide range of skills and
          experience to the table. I am proficient in using MongoDB, Express.js,
          React, and Node.js to build dynamic, modern web applications that meet
          the needs of clients and users alike.
          <br />I have a strong understanding of front-end development,
          including HTML, CSS, and JavaScript, and I am able to create
          responsive and user-friendly interfaces that provide an engaging user
          experience. Additionally, I have expertise in server-side development
          using Node.js and Express, and I am able to create robust and scalable
          back-end systems that can handle high volumes of traffic. <br /> I am
          also skilled in using MongoDB to create and manage databases, and I
          have experience working with data format like JSON. With I expertise
          in React, I am able to create dynamic user interfaces that respond
          quickly to user input, making your applications more efficient and
          effective.
        </p>
        <a
          href="mailto:gauravvaishnav8690@gmail.com"
          className="mt-4 block py-2 px-4 bg-sky-900 w-fit rounded hover:bg-sky-700 border font-medium border-transparent hover:border-gray-700 duration-200 text-white"
        >
          Hire Me!
        </a>
      </div>{" "}
    </>
  );
};
export default WhoIAm;
