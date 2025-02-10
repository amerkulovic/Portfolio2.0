import githubLogo from "../assets/images/github-white.png";
import linkedInLogo from "../assets/images/linkedIn.png";

const Footer = () => {
  return (
    <div className="bg-black flex justify-between items-end py-12 px-2">
      <div className="text-5xl font-bold w-[20%] pl-5 max-sm:text-3xl max-sm:w-[32%]">
        <span>&lt;</span>Amer <span>/&gt;</span>
      </div>
      <section className="flex justify-center w-[60%] max-sm:w-[33%]">
        <a href="https://github.com/amerkulovic" target="_blank" className="mx-2">
          <img src={githubLogo} className="h-12 w-12" />
        </a>
        <a href="https://www.linkedin.com/in/amer-kulovic/" target="_blank" className="mx-2">
          <img src={linkedInLogo} className="h-12 w-12" />
        </a>
      </section>
      <section className="w-[20%] max-sm:w-[33%] max-sm:flex max-sm:justify-center">
        <ul className="flex flex-col font-bold">
          <li className="py-4 text-start">
            <a href="#about">About</a>
          </li>
          <li className="py-4 text-start">
            <a href="#skills">Skills</a>
          </li>
          <li className="py-4 text-start">
            <a href="#projects">Projects</a>
          </li>
          <li className="pt-4 text-start">
            <a href="#contacts">Contact</a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Footer;
