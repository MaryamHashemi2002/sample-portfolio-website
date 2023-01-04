import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

// const initialState = {
//   chat: false,
//   cart: false,
//   userProfile: false,
//   notification: false,
// };

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(undefined);
  const [localMousePos, setLocalMousePos] = useState();
  const [currentMode, setCurrentMode] = useState("light");

  const setMode = (e) => {
    setCurrentMode(e.target.value);
    localStorage.setItem("themeMode", e.target.value);
    console.log(e);
  };

  const animatePage = () => {
    document.addEventListener("DOMContentLoaded", function () {
      var replacers = document.querySelectorAll("[data-replace]");
      for (var i = 0; i < replacers.length; i++) {
        let replaceClasses = JSON.parse(
          replacers[i].dataset.replace.replace(/'/g, '"')
        );
        Object.keys(replaceClasses).forEach(function (key) {
          replacers[i].classList.remove(key);
          replacers[i].classList.add(replaceClasses[key]);
        });
      }
    });
  };
  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        screenSize,
        setScreenSize,
        currentMode,
        setCurrentMode,
        setMode,
        localMousePos,
        setLocalMousePos,
        animatePage,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
