import { useState } from "react";

import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { FiX } from "react-icons/fi";
import { BiCameraMovie } from "react-icons/bi";

const NavBar = () => {
  let Links = [
    { name: "HOME", link: "/" },
    { name: "ACCOUNT", link: "/" },
  ];
  let [open, setOpen] = useState(false);

  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <div className="md:flex items-center justify-between bg-gray-800 py-4 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center gap-1">
          <BiCameraMovie />
          <a href="/">
            <span>Bioscoop</span>
          </a>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7"
        >
          {open ? <FiX /> : <HiOutlineMenuAlt3 />}
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-gray-800 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-12" : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li className="md:ml-8 md:my-0 my-7 font-semibold" key={Links.name}>
              <a
                href={link.link}
                className="text-gray-300 hover:text-blue-400 duration-500"
              >
                {link.name}
              </a>
            </li>
          ))}
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 mx-2 rounded">
            Login
          </button>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
