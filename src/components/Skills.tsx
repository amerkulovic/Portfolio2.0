import { useEffect, useState } from "react";

const Skills = () => {
  const frontendSkills: string[] = ["HTML", "CSS", "Javascript", "React", "Vue", "Tailwind CSS", "Typescript"];
  const backendSkills: string[] = ["Node.js", "Java", "GraphQL", "Mongoose", "SQL"];

  const [selectedSkillset, setSelectedSkillset] = useState<string>("front-end");
  const displayedSkills = selectedSkillset === "front-end" ? frontendSkills : backendSkills;

  function selectSkills(skillset: string) {
    setSelectedSkillset(skillset);
  }
  return (
    <div className="bg-[#6b21a8] flex flex-col items-center">
      <h1 className="text-5xl font-bold text-center">Skills</h1>
      <section className="flex p-5 rounded-lg w-fit">
        <button className={`p-5 rounded-l-lg ${selectedSkillset === "front-end" ? "bg-[#30124e]" : "bg-[#4d177a]"}`} value="front-end" onClick={(e) => selectSkills((e.target as HTMLButtonElement).value)}>
          Frontend
        </button>
        <button className={`p-5 rounded-r-lg ${selectedSkillset === "back-end" ? "bg-[#30124e]" : "bg-[#4d177a]"}`} value="back-end" onClick={(e) => selectSkills((e.target as HTMLButtonElement).value)}>
          Backend
        </button>
      </section>
      <div className="overflow-x-auto whitespace-nowrap py-4">
        <div className="inline-flex space-x-4">
          {displayedSkills.map((skill) => (
            <div className="bg-gray-800 text-white p-4 rounded-lg">{skill}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
