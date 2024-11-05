import Project from "./Project";
const Projects = () => {
  return (
    <div className="bg-gradient-to-b from-[#6b21a8] to-[#1c1c1c] via-[#1c1c1c]">
      <h1 className="text-5xl font-bold text-center">Projects</h1>
      <div className="] py-40 flex flex-wrap justify-center">
        <Project title="Sample" githubLink="sample" websiteLink="sample" image="sample" />
        <Project title="Sample" githubLink="sample" websiteLink="sample" image="sample" />
        <Project title="Sample" githubLink="sample" websiteLink="sample" image="sample" />
        <Project title="Sample" githubLink="sample" websiteLink="sample" image="sample" />
        <Project title="Sample" githubLink="sample" websiteLink="sample" image="sample" />
        <Project title="Sample" githubLink="sample" websiteLink="sample" image="sample" />
      </div>
    </div>
  );
};

export default Projects;
