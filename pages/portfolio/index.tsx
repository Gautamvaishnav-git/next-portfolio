import projects from "./projects.json";
import Card from "../components/portfolio/card";

const Projects = () => {
  return (
    <>
      <div className="sm:px-4 px-2 py-6 container mx-auto">
        <div className="flex gap-8 flex-wrap py-2 w-full justify-center">
          {projects.map((project, index) => (
            <Card
              {...project}
              key={index}
              ProjectsLength={projects.length}
              index={index}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
