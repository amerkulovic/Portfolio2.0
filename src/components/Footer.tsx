import githubLogo from "../assets/images/github-white.png";

const Footer = () => {
  return (
    <div className="bg-black flex justify-between items-center py-12 px-2">
      <div className="text-5xl font-bold w-[33%] pl-5">
        <span>&lt;</span>Amer <span>/&gt;</span>
      </div>
      <a href="https://github.com/amerkulovic" target="_blank" className="flex justify-center w-[33%]">
        <img src={githubLogo} className="h-12 w-12" />
      </a>
      <ul className="flex flex-col w-[33%] items-center font-bold">
        {/* <li className="px-4">
          <a href="#about">About</a>
        </li> */}
        <li className="p-4">
          <a href="#skills">Skills</a>
        </li>
        <li className="p-4">
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
