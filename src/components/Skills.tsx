import { useRef, useState } from "react";
import Card from "./Card";

interface cardObject {
  title: string;
  description: string;
}

const Skills = () => {
  const frontendSkills: cardObject[] = [
    { title: "HTML", description: "lorem" },
    { title: "CSS", description: "lorem" },
    { title: "Javascript", description: "lorem" },
    { title: "React", description: "lorem" },
    { title: "Vue", description: "lorem" },
    { title: "TailwindCSS", description: "lorem" },
    { title: "Typescript", description: "lorem" },
  ];
  const backendSkills: cardObject[] = [
    { title: "Node.js", description: "lorem" },
    { title: "Java", description: "lorem" },
    { title: "GraphQL", description: "lorem" },
    { title: "Mongoose", description: "lorem" },
    { title: "SQL", description: "lorem" },
  ];

  const [selectedSkillset, setSelectedSkillset] = useState<string>("front-end");
  const displayedSkills = selectedSkillset === "front-end" ? frontendSkills : backendSkills;

  function selectSkills(skillset: string) {
    setSelectedSkillset(skillset);
  }

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [focusedIndex, setFocusedIndex] = useState(0);
  const cardWidth = 220;

  const scrollLeft = () => {
    setFocusedIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -cardWidth, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    setFocusedIndex((prevIndex) => Math.min(prevIndex + 1, displayedSkills.length - 1));
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: cardWidth, behavior: "smooth" });
    }
  };
  return (
    <div id="about" className="bg-[#6b21a8] flex flex-col items-center relative pb-5">
      <h1 className="text-5xl font-bold text-center">Skills</h1>
      <section className="flex p-5 rounded-lg w-fit">
        <button className={`p-5 rounded-l-lg ${selectedSkillset === "front-end" ? "bg-[#30124e]" : "bg-[#4d177a]"}`} value="front-end" onClick={(e) => selectSkills((e.target as HTMLButtonElement).value)}>
          Frontend
        </button>
        <button className={`p-5 rounded-r-lg ${selectedSkillset === "back-end" ? "bg-[#30124e]" : "bg-[#4d177a]"}`} value="back-end" onClick={(e) => selectSkills((e.target as HTMLButtonElement).value)}>
          Backend
        </button>
      </section>
      <button onClick={scrollLeft} className="absolute left-2 top-[195px] transform -translate-y-1/2 text-5xl text-white p-2 z-10">
        ◀
      </button>
      <div ref={scrollContainerRef} className="w-full overflow-hidden whitespace-nowrap touch-pan-y flex justify-center">
        <div className="inline-flex space-x-4">
          {displayedSkills.map((skill, index) => (
            <Card key={skill.title} title={skill.title} description={skill.description} isFocused={index === focusedIndex} isNearFocus={Math.abs(index - focusedIndex) === 1} isFarFromFocus={Math.abs(index - focusedIndex) > 1} />
          ))}
        </div>
      </div>
      <button onClick={scrollRight} className="absolute right-2 top-[195px] transform -translate-y-1/2 text-5xl text-white p-2 z-10">
        ▶
      </button>
    </div>
  );
};

export default Skills;
