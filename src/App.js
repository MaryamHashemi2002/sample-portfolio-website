import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Contact, Contract, Portfolio, Home, Resume } from "./pages";
import { Sidebar, Navbar } from "./components";
import "./App.css";
import { useStateContext } from "./contexts/ContextProvider";

function App() {
  const { activeMenu, currentMode, setCurrentMode, setMode } =
    useStateContext();

  useEffect(() => {
    const currentThemeMode = localStorage.getItem("themeMode");
    if (currentThemeMode) {
      setCurrentMode(currentThemeMode);
    }
  }, []);

  return (
    <div className={currentMode === "Dark" ? "dark" : ""}>
      <BrowserRouter>
        <div className="flex relative">
          {activeMenu ? (
            <div className="transition-[width] delay-300 duration-1000 ease-in-out md:left-0 right-0 md:transition-none w-full md:w-24 fixed  sidebar bg-white dark:bg-black text-cyan-600">
              <Sidebar />
            </div>
          ) : (
            <div className="transition duration-1000 ease-in-out w-0 h-0">
              <Sidebar />
            </div>
          )}
        </div>

        <div
          className={`bg-main-bg  relative min-h-screen ${
            activeMenu ? "md:ml-24" : "flex-2"
          }`}
        >
          <div className="fixed md:z-auto z-10">
            <Navbar />
          </div>
          <div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Home" element={<Home />} />
              <Route path="/Portfolio" element={<Portfolio />} />
              <Route path="/Resume" element={<Resume />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="/Contract" element={<Contract />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
