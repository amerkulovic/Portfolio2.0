const Nav = () => {
  return (
    <div className="flex justify-between align-middle p-5 bg-[#1c1c1c] fixed top-0 left-0 w-full z-50">
      <div className="text-5xl font-bold">
        <span>&lt;</span>Amer <span>/&gt;</span>
      </div>
      <ul className="flex items-center font-bold">
        <li className="px-4">About</li>
        <li className="px-4">Skills</li>
        <li className="px-4">Projects</li>
        <li className="pl-4 mr-10">Contact</li>
      </ul>
    </div>
  );
};

export default Nav;
