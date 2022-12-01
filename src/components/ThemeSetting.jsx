import React from "react";
import { useStateContext } from "../contexts/ContextProvider";

const ThemeSetting = () => {
  const { currentMode, setMode } = useStateContext();

  return (
    <div> 
      <div className="mt-4">
        <input
          type="radio"
          id="light"
          name="theme"
          value="Light"
          className="cursor-pointer"
          onChange={setMode}
          checked={currentMode === "Light"}
        />
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="light" className="ml-2 text-md cursor-pointer">
          Light
        </label>
      </div>
      <div className="mt-2">
        <input
          type="radio"
          id="dark"
          name="theme"
          value="Dark"
          onChange={setMode}
          className="cursor-pointer"
          checked={currentMode === "Dark"}
        />
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="dark" className="ml-2 text-md cursor-pointer">
          Dark
        </label>
      </div>
    </div>
  );
};

export default ThemeSetting;
