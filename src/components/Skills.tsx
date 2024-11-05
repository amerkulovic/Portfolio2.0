import { useRef, useState, useEffect } from "react";
import Card from "./Card";

interface cardObject {
  title: string;
  description: string;
}

const Skills = () => {
  const frontendSkills: cardObject[] = [
    { title: "HTML", description: "The standard language for creating web pages, HTML structures content on the web and provides the foundation for building user interfaces." },
    { title: "CSS", description: "A styling language used to define the appearance of web pages, CSS allows you to create responsive, visually appealing layouts." },
    { title: "JavaScript", description: "A versatile scripting language for web development, JavaScript enables dynamic interactions, animations, and complex user interface logic." },
    { title: "React", description: "A JavaScript library for building user interfaces, React uses a component-based architecture to simplify the development of complex UIs." },
    { title: "Vue", description: "An approachable front-end framework, Vue makes building UIs simple and is known for its easy-to-understand, component-based approach." },
    { title: "Tailwind", description: "A utility-first CSS framework, TailwindCSS offers low-level styling that allows for rapid and responsive design customization." },
    { title: "TypeScript", description: "A superset of JavaScript that adds static typing, TypeScript helps catch errors at compile time and improves code readability." },
  ];

  const backendSkills: cardObject[] = [
    { title: "Node.js", description: "An open-source, cross-platform runtime for executing JavaScript on the server, Node.js is widely used for scalable, high-performance web applications." },
    { title: "Java", description: "A robust, object-oriented programming language, Java is known for its stability and scalability, commonly used in enterprise-level applications." },
    { title: "GraphQL", description: "A query language for APIs, GraphQL allows clients to request specific data, reducing the amount of data transferred over the network." },
    { title: "Mongoose", description: "An ODM library for MongoDB and Node.js, Mongoose provides a straightforward way to model data and manage MongoDB collections." },
    { title: "SQL", description: "A standard language for relational databases, SQL allows developers to store, query, and manipulate structured data efficiently." },
  ];

  const [selectedSkillset, setSelectedSkillset] = useState<string>("front-end");
  const displayedSkills = selectedSkillset === "front-end" ? frontendSkills : backendSkills;

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [focusedIndex, setFocusedIndex] = useState(0);
  const cardWidth = 220;
  const containerWidth = 600;

  const handleSkillsetSelection = (value: string) => {
    setSelectedSkillset(value);
    setFocusedIndex(0);
  };

  // useEffect(() => {
  // Center the focused card
  // if (scrollContainerRef.current) {
  //   const container = scrollContainerRef.current;
  //   const containerWidth = container.clientWidth;
  //   const cardWidth = 520;
  //   const scrollOffset = focusedIndex * cardWidth - (containerWidth - cardWidth) / 2;
  //   container.scrollTo({ left: scrollOffset, behavior: "smooth" });
  //   }
  // }, [focusedIndex]);

  const scrollLeft = () => {
    setFocusedIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const scrollRight = () => {
    setFocusedIndex((prevIndex) => Math.min(prevIndex + 1, displayedSkills.length - 1));
  };
  return (
    <div id="about" className="bg-[#6b21a8] flex flex-col items-center relative pb-20">
      <h1 className="text-5xl font-bold text-center">Skills</h1>
      <section className="flex p-5 rounded-lg w-fit">
        <button className={`p-5 rounded-l-lg ${selectedSkillset === "front-end" ? "bg-[#30124e]" : "bg-[#4d177a]"}`} value="front-end" onClick={() => handleSkillsetSelection("front-end")}>
          Frontend
        </button>
        <button className={`p-5 rounded-r-lg ${selectedSkillset === "back-end" ? "bg-[#30124e]" : "bg-[#4d177a]"}`} value="back-end" onClick={() => handleSkillsetSelection("back-end")}>
          Backend
        </button>
      </section>
      <button onClick={scrollLeft} className="absolute left-2 top-[255px] transform -translate-y-1/2 text-5xl text-white p-2 z-10">
        ◀
      </button>
      <div ref={scrollContainerRef} className="w-full overflow-hidden touch-pan-y flex justify-center">
        <div className="inline-flex space-x-4">
          {displayedSkills.map((skill, index) => (
            <Card key={skill.title} title={skill.title} description={skill.description} isFocused={index === focusedIndex} isNearFocus={Math.abs(index - focusedIndex) === 1} isFarFromFocus={Math.abs(index - focusedIndex) > 1} />
          ))}
        </div>
      </div>
      <button onClick={scrollRight} className="absolute right-2 top-[255px] transform -translate-y-1/2 text-5xl text-white p-2 z-10">
        ▶
      </button>
    </div>
  );
};

export default Skills;
