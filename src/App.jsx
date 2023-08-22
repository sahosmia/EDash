import { useState, useEffect } from "react";
import "./App.css";
import { FiSettings } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { useStateContext } from "./contexts/ContextProvider";
import { ThemeSettings, Sidebar, Navbar } from "./data/component";
import RevinueItem from "./components/dashboard/RevinueItem";
import { revinueDatas } from "./data/dummy";

function App() {
  const {
    activeMenu,
    setActiveMenu,
    iconMenu,
    currentColor,
    themeSettings,
    setThemeSettings,
  } = useStateContext();

 


  return (
    <>
      <div className="flex relative">
        <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
          <button
            type="button"
            onClick={() => setThemeSettings(!themeSettings)}
            style={{ background: currentColor, borderRadius: "50%" }}
            className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray rotate-36 transition-all duration-300 ease-in-out"
          >
            {themeSettings ? <IoClose /> : <FiSettings />}
          </button>
        </div>

        <Sidebar />
        <div
          className={
            activeMenu || !iconMenu
              ? "bg-gray-200 min-h-screen w-full md:ml-72 transition-all duration-300 ease-in-out"
              : "bg-gray-200 min-h-screen w-full md:ml-20 flex-2 transition-all  duration-300 ease-in-out "
          }
        >
          <Navbar />

          {/* Main Content Start  */}
          <div className="p-10 max-md:mt-16 max-md:ml-16  ">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {revinueDatas.map((revinue, revinueI) => (
                <RevinueItem key={revinueI} itemData={revinue} />
              ))}
            </div>
          </div>
          {/* Main Content End  */}
        </div>
        {themeSettings && <ThemeSettings />}
      </div>
    </>
  );
}

export default App;
