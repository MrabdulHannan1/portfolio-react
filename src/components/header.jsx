// header.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gray-800 p-4">
      <nav className="flex flex-wrap items-center justify-between">
        <div className="text-white">
          <h1 className="mt-0 font-bold text-lg md:text-lg lg:text-xl xl:text-2xl">
            <Link to="/" className="hover:text-gray-300">
              Hannan
            </Link>
          </h1>
        </div>
        {/* Hamburger menu icon for mobile */}
        <div className="lg:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>
        </div>
        {/* Navigation menu */}
        <ul
          className={`${
            isMenuOpen
              ? "flex flex-col mt-4 bg-gray-800 p-4 w-full"
              : "hidden lg:flex lg:space-x-4"
          } text-white list-none lg:pt-0`}
        >
          <li className="mb-2 text-sm md:text-base lg:text-lg">
            <Link
              to="/"
              className="block py-2 px-4 hover:text-gray-300"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li className="mb-2 text-sm md:text-base lg:text-lg">
            <Link
              to="/about"
              className="block py-2 px-4 hover:text-gray-300"
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
          </li>
          <li className="mb-2 text-sm md:text-base lg:text-lg">
            <Link
              to="/project"
              className="block py-2 px-4 hover:text-gray-300"
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </Link>
          </li>
          <li className="mb-2 text-sm md:text-base lg:text-lg">
            <Link
              to="/hire"
              className="block py-2 px-4 hover:text-gray-300"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
          </li>
          {/* Hire Me button always visible on larger screens */}
          <div className="">
            <Link to="/hire">
              <button className="text-sm md:text-lg lg:text-lg btn pb-2  mt-[0px] ml-[-16px] lg:block">
                Hire Me
              </button>
            </Link>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
