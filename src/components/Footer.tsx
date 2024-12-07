import githubLogo from "../assets/images/github-white.png";
import linkedInLogo from "../assets/images/linkedIn.png";

const Footer = () => {
  return (
    <div className="bg-black flex justify-between items-end py-12 px-2">
      <div className="text-5xl font-bold w-[33%] pl-5">
        <span>&lt;</span>Amer <span>/&gt;</span>
      </div>
      <section className="flex justify-center w-[33%]">
        <a href="https://github.com/amerkulovic" target="_blank" className="mx-2">
          <img src={githubLogo} className="h-12 w-12" />
        </a>
        <a href="https://www.linkedin.com/in/amer-kulovic/" target="_blank" className="mx-2">
          <img src={linkedInLogo} className="h-12 w-12" />
        </a>
      </section>
      <ul className="flex flex-col w-[33%] items-center font-bold">
        <li className="px-4">
          <a href="#about">About</a>
        </li>
        <li className="py-4">
          <a href="#skills">Skills</a>
        </li>
        <li className="py-4">
          <a href="#projects">Projects</a>
        </li>
        <li className="pt-4">
          <a href="#contacts">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
