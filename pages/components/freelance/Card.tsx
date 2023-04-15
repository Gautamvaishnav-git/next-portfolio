import Image from "next/image";
import services from "./services.json";

const Card = () => {
  return (
    <>
      <div className="sm:p-6 p-2 bg-white rounded w-full">
        <a href="https://www.freelancer.in/u/PradhumnSingh" target="_blank">
          <Image
            src="./freelancer.svg"
            alt="freelance"
            width="100"
            height="100"
            className="mx-auto w-44"
          />
        </a>
        <div className="pt-4 pb-8">
          <h2 className="py-2 text-xl font-bold text-sky-500 text-center">
            Stats
          </h2>
          <article className="flex justify-center gap-10 pb-2">
            <div className="flex gap-6 w-full sm:w-1/4 md:w-1/5">
              <span className="text-green-500 font-bold">96%</span>
              <span className="text-gray-700 grow text-right">
                Jobs Completed
              </span>
            </div>
            <div className="flex gap-6 w-full sm:w-1/4 md:w-1/5">
              <span className="text-green-500 font-bold">92%</span>
              <span className="text-gray-700 grow text-right">On Budget</span>
            </div>
          </article>
          <article className="flex justify-center gap-10 pb-2">
            <div className="flex gap-6 w-full sm:w-1/4 md:w-1/5">
              <span className="text-green-500 font-bold">94%</span>
              <span className="text-gray-700 grow text-right">On Time</span>
            </div>
            <div className="flex gap-6 w-full sm:w-1/4 md:w-1/5">
              <span className="text-green-500 font-bold">70%</span>
              <span className="text-gray-700 grow text-right">
                Repeat Hire Rate
              </span>
            </div>
          </article>
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-bold">Services</h2>
          {services.map((service, index) => {
            return (
              <div
                className="flex justify-between items-center p-2 bg-gray-100 rounded hover:bg-sky-200 duration-200"
                key={index}
              >
                <span className="">{service}</span>
                <span className="text-xl">✅</span>
              </div>
            );
          })}
        </div>
        <a
          href="https://www.freelancer.in/u/PradhumnSingh"
          target="_blank"
          className="text-center py-2 px-3 mt-4 block text-white border border-transparent hover:border-sky-500 hover:bg-transparent hover:text-black duration-200 bg-sky-500 rounded w-fit mx-auto text-xl"
        >
          {"Let's"} work with us!
        </a>
      </div>
    </>
  );
};

export default Card;
