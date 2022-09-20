import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Contact, Contract, Portfolio, Home, Resume } from "./pages";
import { Sidebar } from "./components";
import "./App.css";

function App() {
  const activeMenu = true;

  return (
    <div>
      <BrowserRouter>
        <div className="flex relative">

          {activeMenu ? (<div className="w-60 bg-black">Sidebar</div>) : (<div>Sidebar OFF</div>)}

        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
