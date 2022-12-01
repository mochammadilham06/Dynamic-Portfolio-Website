import React from "react";
import { useNavigate, NavLink, Outlet } from "react-router-dom";

import { UserAuth } from "../../utils/helper";
import Swal from "sweetalert2";
import { MyAvatar } from "../../assets";
let activeClassName =
  "relative px-4 py-3 flex items-center space-x-4 rounded-xl font-bold text-white bg-gradient-to-r from-sky-600 to-cyan-400";

let notActive =
  "px-4 py-3 flex items-center text-white font-medium space-x-4 rounded-md ";

const Layout = () => {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const HANDLELOGOUT = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "Want to logout",
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Logout!",
    }).then((result) => {
      if (result.isConfirmed) {
        try {
          Swal.fire("Logout!", "You has been logout.", "success");
          logout();
          navigate("/secret-login");
        } catch (error) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Logout is Error",
          });
        }
      }
    });
  };
  return (
    <>
      <aside className="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-primary transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
        <div>
          <div className="-mx-6 px-6 py-4">
            <NavLink to={"/dashboard-admin/home"}>
              <h1 className="self-center text-2xl font-extrabold tracking-wide whitespace-nowrap text-white">
                <span className="text-secondary">PORT</span>FOLIO
              </h1>
            </NavLink>
          </div>

          <ul className="space-y-2 tracking-wide mt-8">
            <li>
              <NavLink to={"/dashboard-admin/home"} className>
                {({ isActive }) => (
                  <span className={isActive ? activeClassName : notActive}>
                    Dashboard
                  </span>
                )}
              </NavLink>
            </li>
            <li>
              <NavLink to={"/dashboard-admin/portfolios"}>
                {({ isActive }) => (
                  <span className={isActive ? activeClassName : notActive}>
                    Portfolio
                  </span>
                )}
              </NavLink>
            </li>

            <li>
              <NavLink to={"/dashboard-admin/skills"}>
                {({ isActive }) => (
                  <span className={isActive ? activeClassName : notActive}>
                    Skills
                  </span>
                )}
              </NavLink>
            </li>
          </ul>
          <div className="h-screen flex flex-col-reverse items-center justify-center">
            <button
              onClick={HANDLELOGOUT}
              type="button"
              className="text-white w-full bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              LOGOUT
            </button>
          </div>
        </div>
      </aside>
      <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
        <div className="sticky z-10 top-0 h-16 border-b bg-white lg:py-2.5">
          <div className="px-6 flex items-center justify-between space-x-4 2xl:container">
            <h5
              hidden=""
              className="text-2xl text-gray-600 font-medium lg:block"
            >
              Mochammad Ilham Maulana
            </h5>

            <div className="flex space-x-4 items-center">
              <div>
                <a
                  href="https://github.com/mochammadilham06/"
                  className="text-primary"
                >
                  {user && user.email}
                </a>
              </div>

              <img
                className="w-10 h-10 rounded-full"
                src={MyAvatar}
                alt="Rounded avatar"
              ></img>
            </div>
          </div>
        </div>
        <div className="px-6 pt-6 2xl:container">{<Outlet />}</div>
      </div>
    </>
  );
};

export default Layout;
