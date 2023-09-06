import { sideMenus } from "../../data/dummy";
import { useStateContext } from "../../contexts/ContextProvider";
import { useColorContext } from "../../contexts/ColorContextProvider";

import SidebarItem from "./SidebarItem";
import { Link } from "react-router-dom";

function Sidebar() {
  const { activeMenu, iconMenu, setIconMenu, hideMenu } = useStateContext();
  const { currentColor } = useColorContext();

  return (
    <div
      className={
    `${(activeMenu || !iconMenu) && "w-72"} ${
      !activeMenu && iconMenu && !hideMenu && "w-20"
    } ${
      hideMenu && "w-0"
    } fixed sidebar flex flex-col  bg-white dark:bg-dark-white-bg h-screen transition-all duration-300 ease-in-out shadow dark:shadow-gray-700`
  }
      onMouseEnter={() => setIconMenu(false)}
      onMouseLeave={() => setIconMenu(true)}
    >
      <Link to="/">
        <div className=" text-2xl font-bold text-neutral-900 dark:text-white text-center py-5">
          <span style={{ color: currentColor }}>E.</span>
          {(activeMenu || !iconMenu) && "Dash"}
        </div>
      </Link>

      <div className="px-2 overflow-auto ">
        {sideMenus.map((sideMenu, key) => (
          <div key={key} className={`${(activeMenu || !iconMenu) && "pb-2"}`}>
            {(activeMenu || !iconMenu) && (
              <h6 className="text-gray-400 dark:text-gray-300 mx-3 mt-4 uppercase text-xs ">
                {sideMenu.title}
              </h6>
            )}

            <ul>
              {sideMenu.menus.map((menu, i) => (
                <SidebarItem key={i} menu={menu} />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
