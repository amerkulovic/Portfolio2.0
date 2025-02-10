const Nav = () => {
  return (
    <div className="flex justify-between align-middle p-5 bg-[#1c1c1c] fixed top-0 left-0 w-full z-50">
      <div className="text-5xl font-bold max-sm:text-4xl">
        <span>&lt;</span>Amer <span>/&gt;</span>
      </div>
      <ul className="flex items-center font-bold">
        <li className="px-4 max-sm:px-2">
          <a href="#about">About</a>
        </li>
        <li className="px-4 max-sm:px-2">
          <a href="#skills">Skills</a>
        </li>
        <li className="px-4 max-sm:px-2">
          <a href="#projects">Projects</a>
        </li>
        <li className="pl-4 mr-10 max-sm:mr-0 max-sm:pl-1">
          <a href="#contacts">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
