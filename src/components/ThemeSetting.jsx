import React from "react";
import { useStateContext } from "../contexts/ContextProvider";

const ThemeSetting = () => {
  const { currentMode, setMode } = useStateContext();

  return ( 
    
    <div className=" m-4"> 
      <div className="mt-4">
        <input
          type="radio"
          id="light"
          name="theme"
          value="Light"
          className="cursor-pointer hidden"
          onChange={setMode}
          checked={currentMode === "Light"}
        />
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="light" className="ml-2 text-md cursor-pointer after:content-[''] after:border-01 after:mt-4 after:bg-white after:rotate-180 after:w-3 after:block">
          <div className="dark:bg-sun bg-sunDark  h-6 bg-no-repeat"></div>
        </label>
      </div>
      <div className="mt-2">

        <input
          type="radio"
          id="dark"
          name="theme"
          value="Dark"
          onChange={setMode}
          className="cursor-pointer hidden"
          checked={currentMode === "Dark"}
        />
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="dark" className="ml-2 text-md cursor-pointer">
        <div className="dark:bg-moon bg-moonDark bg-24 h-6 bg-no-repeat"></div>
        </label>
      </div>
    </div>
  );
};

export default ThemeSetting;
