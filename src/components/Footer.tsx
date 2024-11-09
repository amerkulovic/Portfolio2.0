import githubLogo from "../assets/images/github-white.png";

const Footer = () => {
  return (
    <div className="bg-black flex justify-between py-5">
      <div className="text-5xl font-bold">
        <span>&lt;</span>Amer <span>/&gt;</span>
      </div>
      <a href="https://github.com/amerkulovic" target="_blank">
        <img src={githubLogo} className="h-12 w-12" />
      </a>
      <ul className="flex items-center font-bold">
        <li className="px-4">
          <a href="#about">About</a>
        </li>
        <li className="px-4">Skills</li>
        <li className="px-4">Projects</li>
        <li className="pl-4 mr-10">Contact</li>
      </ul>
    </div>
  );
};

export default Footer;