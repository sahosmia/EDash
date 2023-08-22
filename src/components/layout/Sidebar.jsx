import React from "react";
import { sideMenus } from "../../data/dummy";
import { useStateContext } from "../../contexts/ContextProvider";

function Sidebar() {
  const { activeMenu, setActiveMenu, iconMenu, setIconMenu } =
    useStateContext();

  return (
    <div
      className={`${(activeMenu || !iconMenu) && "w-72"} ${
        !activeMenu && iconMenu && "w-20"
      } fixed sidebar flex flex-col  bg-white h-screen transition-all duration-300 ease-in-out shadow`}
      onMouseEnter={() => setIconMenu(false)}
      onMouseLeave={() => setIconMenu(true)}
    >
      <div className=" text-2xl font-bold text-neutral-900 text-center py-5">
        <span className="text-main">E.</span>
        {(activeMenu || !iconMenu) && "Dash"}
      </div>
      <div className="px-2 overflow-auto ">
        <div className=" hover:visible">
          {sideMenus.map((sideMenu, key) => (
            <div key={key} className={`${(activeMenu || !iconMenu) && "pb-3"}`}>
              {(activeMenu || !iconMenu) && (
                <h6 className="text-gray-400 font-medium m-3 mt-4 uppercase text-xs ">
                  {sideMenu.title}
                </h6>
              )}

              <ul>
                {sideMenu.menus.map((menu, i) => (
                  <li key={i}>
                    <a
                      className="flex items-center gap-3 pl-4  text-gray-700   hover:bg-light-gray py-2"
                      href="#"
                    >
                      <span className="text-xl"> {menu.icon}</span>
                      {(activeMenu || !iconMenu) && menu.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
