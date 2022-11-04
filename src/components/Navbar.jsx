import React, { useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";

import { useStateContext } from "../contexts/ContextProvider";

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <button
    type="buttom"
    onClick={customFunc}
    style={{ color }}
    className="m-4 relative text-xl border p-3 block md:hidden hover:bg-light-gray"
  >
    {icon}
  </button>
);

const Navbar = () => {
  const { activeMenu, setActiveMenu, screenSize , setScreenSize} = useStateContext();


  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <div>
      <div className="flex justify-between flex-row-reverse p-2 md:mx-6 relative">
        <NavButton
          title="Menu"
          customFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
          
          icon={<AiOutlineMenu />}
        />
      </div>
    </div>
  );
};

export default Navbar;
