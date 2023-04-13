import WhoIAm from "../components/about/whoIAm";

const About = () => {
  return (
    <>
      <div className="px-4 pt-20 pb-4 bg-[url('/RoboticBG.png')] bg-slate-900 bg-blend-overlay bg-no-repeat bg-cover bg-right">
        <div>
          <h2 className="text-3xl font-bold text-sky-500 text-center pb-20">
            Who am I?
          </h2>
          <WhoIAm />
        </div>
      </div>
    </>
  );
};

export default About;
