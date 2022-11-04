import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Contact, Contract, Portfolio, Home, Resume } from "./pages";
import { Sidebar, Navbar } from "./components";
import "./App.css";
import { useStateContext } from "./contexts/ContextProvider";

function App() {
  const { activeMenu } = useStateContext();

  return (
    <div>
      <BrowserRouter>
        <div className="flex relative">
          {activeMenu ? (
            <div className="transition-[width] duration-1000 ease-in-out md:transition-none w-full md:w-24 fixed sidebar bg-black text-cyan-600">
              <Sidebar />
            </div>
          ) : (
            <div className="transition duration-1000 ease-in-out w-0 h-0"><Sidebar /></div>
          )}
        </div>

        <div
          className={`bg-main-bg w-full min-h-screen ${
            activeMenu ? "md:ml-40" : "flex-2"
          }`}
        >
          <div className="w-full bg-main-bg ">
            <Navbar />
          </div>
          <div>
            <Routes>
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
