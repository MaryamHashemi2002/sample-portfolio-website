import React from "react";
import { Link, NavLink } from "react-router-dom";
import { links } from "../data/dummy";

import { MdOutlineCancel } from "react-icons/md";
import { useStateContext } from "../contexts/ContextProvider";
import ThemeSetting from "./ThemeSetting";

const Sidebar = () => {
  const {
    activeMenu,
    setActiveMenu,
    screenSize,
    setScreenSize,
    currentMode,
    setMode,
  } = useStateContext();

  const handleCloseSidebar = () => {
    if (activeMenu && screenSize <= 756) {
      setActiveMenu(false);
    }
  };
  const activeLink =
    "font-semibold text-13 tracking-wide uppercase p-paddingMenu text-dark-gray";
  const normalLink =
    "font-semibold text-13 tracking-wide uppercase p-paddingMenu text-light-gray";
  return (
    <div className="h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {activeMenu && (
        <>
          <div className="transition duration-1000 flex justify-between md:p-4 p-10">
            <Link
              to="/"
              onClick={handleCloseSidebar}
              className="items-center
                  gap-3 ml-3 mt-4 flex 
                  text-xl font-extrabold
                  tracking-tight text-white            
                  "
            >
              <span className="text-3xl md:m-4 relative dark:text-white text-black md:right-2">
                A.
              </span>
            </Link>
            <button
              type="button"
              className="text-xl border white p-3
               hover:shadow
                mt-4 block md:hidden
                text-white"
              onClick={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
            >
              <MdOutlineCancel />
            </button>
          </div>
          <div className="flex md:flex-col-reverse mt-16">
            {links.map((item) => (
              <div
                key={item.title}
                className="md:rotate-270 p-10 "
              >
                {item.links.map((Link) => (
                  <NavLink
                    to={`${Link.name}`}
                    key={Link.key}
                    onClick={handleCloseSidebar}
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                  >
                    <span> {Link.name}</span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
          <div className="relative">
            <ThemeSetting />
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
