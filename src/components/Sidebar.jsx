import React from "react";
import { Link, NavLink } from "react-router-dom";
import { links } from "../data/dummy";

import { MdOutlineCancel } from "react-icons/md";
import { useStateContext } from "../contexts/ContextProvider";

const Sidebar = () => {

  const { activeMenu, setActiveMenu, screenSize , setScreenSize} = useStateContext();

 

  const handleCloseSidebar = () => {
    if(activeMenu && screenSize <= 900){
      setActiveMenu(false);
    }
  };

  const activeLink =
    "flex items-center pt-3 pb-2.5 text-white text-md m-2";
  const normalLink =
    "flex items-center pt-3 pb-2.5 text-md text-white dark:text-gray-200 dark:hover:text-black m-2";

  return (
    <div className="h-screen md: overflow-auto md:overflow-hidden md:hover:overflow-auto pb-10">
      {activeMenu && (
        <>
          <div className="transition duration-1000 flex justify-between p-4">
            <Link
              to="/"
              onClick={handleCloseSidebar}
              className="items-center
                  gap-3 ml-3 mt-4 flex 
                  text-xl font-extrabold
                  tracking-tight text-white
                  
                  "
            >
              <span className="text-3xl md:m-4 relative md:right-2">A.</span>
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
          <div>
            {links.map((item) => (
              <div key={item.title} className="flex flex-col items-center md:rotate-90 md:mb-4">
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
        </>
      )}
    </div>
  );
};

export default Sidebar;
