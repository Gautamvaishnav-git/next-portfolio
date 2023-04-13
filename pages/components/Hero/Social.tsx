import Image from "next/image";

const Social = () => {
  return (
    <>
      <div className="grid grid-cols-3 space-x-4 md:space-x-6 md:flex md:justify-center lg:justify-start">
        <a
          aria-label="Linkedin"
          href="https://www.linkedin.com/in/gautamvaishnav/"
          className="p-4 border border-gray-200 dark:bg-gray-800 dark:border-gray-700 rounded-full duration-300 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-600/20 dark:hover:border-cyan-300/30"
          target="_blank"
        >
          <div className="flex justify-center space-x-4">
            <Image
              className="w-6 h-6"
              src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png"
              alt="slack logo"
              loading="lazy"
              width="128"
              height="128"
            />
            <span className="hidden font-medium md:block dark:text-white">
              Linkedin
            </span>
          </div>
        </a>
        <a
          aria-label="instagram"
          href="https://www.instagram.com/gautam__vaishnav__"
          className="p-4 border border-gray-200 dark:bg-gray-800  dark:border-gray-700 rounded-full duration-300 hover:border-green-400 hover:shadow-lg hover:shadow-purple-600/20 dark:hover:border-green-300/30"
          target="_blank"
        >
          <div className="flex justify-center space-x-4">
            <Image
              className="w-6 h-6"
              src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
              alt="instagram"
              loading="lazy"
              width="128"
              height="128"
            />
            <span className="hidden font-medium md:block dark:text-white">
              instagram
            </span>
          </div>
        </a>
        <a
          aria-label="mail"
          href="mailto:gauravvaishnav8690@gmail.com"
          className="p-4 border border-gray-200 dark:bg-gray-800  dark:border-gray-700 rounded-full duration-300 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-600/20 dark:hover:border-blue-300/30"
        >
          <div className="flex justify-center space-x-4">
            <Image
              className="w-6 h-6"
              src="https://cdn-icons-png.flaticon.com/512/4946/4946354.png"
              alt="Mail"
              loading="lazy"
              width="128"
              height="128"
            />
            <span className="hidden font-medium md:block dark:text-white">
              Mail
            </span>
          </div>
        </a>
      </div>

      <div className="dark:text-gray-300">
        🔥🌟
        <span>Other integrations :</span>
        <a
          href="https://dev.to/gautamvaishnav"
          className="font-semibold text-gray-700 dark:text-gray-200"
          target="_blank"
        >
          Dev.to,
        </a>
        <a
          href="https://twitter.com/Gautam_V_"
          className="font-semibold text-gray-700 dark:text-gray-200"
          target="_blank"
        >
          Twitter
        </a>
      </div>
    </>
  );
};

export default Social