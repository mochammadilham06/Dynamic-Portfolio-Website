import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

let activeStyle = {
  textDecoration: "underline",
};

let activeClassName = "underline";

const NavComponent = ({ setActive }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="bg-primary border-gray-200 px-2 sm:px-4 lg:px-36 py-2.5 dark:bg-gray-900">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <a href="#" className="flex items-center">
          <h1 className="self-center text-2xl font-extrabold tracking-wide whitespace-nowrap text-white">
            <span className="text-secondary">PORT</span>FOLIO
          </h1>
        </a>
        <button
          onClick={() => setToggle(!toggle)}
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-white focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 "
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Hamburger</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div
          className={`${toggle ? "block" : "hidden"} w-full md:block md:w-auto`}
        >
          <ul className="flex flex-col p-4 mt-4 bg-white rounded-lg border font-semibold border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:font-medium md:border-0 md:text-lg lg:text-lg md:bg-primary xl:bg-primary xl:font-bold ">
            <li>
              <NavLink to={"/"}>
                <p
                  className={`${
                    setActive === "home"
                      ? "text-secondary bg-primary md:text-secondary lg:text-secondary xl:text-secondary"
                      : "text-primary md:text-white "
                  } block py-2 pr-4 pl-3 md:border-0 md:p-0 hover:text-secondary hover:bg-primary`}
                  aria-current="page"
                >
                  Home
                </p>
              </NavLink>
            </li>
            <li>
              <Link>
                <p className="block py-2 pr-4 pl-3 text-primary rounded hover:bg-primary hover:text-secondary md:hover:bg-transparent md:border-0 md:hover:text-secondary md:p-0 md:text-white">
                  About Me
                </p>
              </Link>
            </li>
            <li>
              <Link to={"/skills"}>
                <p
                  className={`${
                    setActive === "skills"
                      ? "text-secondary bg-primary md:text-secondary lg:text-secondary xl:text-secondary"
                      : "text-primary md:text-white"
                  } block py-2 pr-4 pl-3 md:border-0 md:p-0 hover:text-secondary hover:bg-primary`}
                >
                  Skill
                </p>
              </Link>
            </li>
            <li>
              <Link to={"/portfolio"}>
                <p
                  className={`${
                    setActive === "portfolio"
                      ? "text-secondary bg-primary md:text-secondary lg:text-secondary xl:text-secondary"
                      : "text-primary md:text-white"
                  } block py-2 pr-4 pl-3 md:border-0 md:p-0 hover:text-secondary hover:bg-primary `}
                >
                  Portfolio
                </p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavComponent;
