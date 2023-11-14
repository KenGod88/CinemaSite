import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav className="bg-black bg-opacity-40 h-20 p-4 flex justify-around place-items-center">
        <NavLink to="/" className={"text-white text-2xl"}>
          Bioscoop
        </NavLink>
      </nav>
    </div>
  );
};

export default NavBar;
