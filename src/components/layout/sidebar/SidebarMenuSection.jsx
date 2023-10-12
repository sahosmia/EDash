import { useSelector } from "react-redux";
import { sideMenus } from "../../../data/dummy";
import SidebarItem from "./SidebarItem";

export function SidebarMenuSection() {
  const commonState = useSelector((state) => state.common);
  const { iconMenu, activeMenu,  } = commonState;
  return (
    <div className="px-2 overflow-auto ">
      {sideMenus.map((sideMenu, key) => (
        <div
          key={key}
          className={`${(activeMenu || !iconMenu) && "pb-2"}`}
        >
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
  );
}
