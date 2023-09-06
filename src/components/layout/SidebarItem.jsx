import React, { useState, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { useStateContext } from "../../contexts/ContextProvider";
import { useEffect } from "react";
import SubMenuItem from "./SubMenuItem";
import { useColorContext } from "../../contexts/ColorContextProvider";

function SidebarItem({ menu }) {
  const { activeMenu, iconMenu } = useStateContext();
  const { navItemColorDark, navItemColorLight, currentColor } =
    useColorContext();

  const [isDropDown, setIsDropDown] = useState(false);

  const [isHover, setIsHover] = useState(false);

  const location = useLocation();

  const { pathname } = location;
  const pathInclude = pathname.includes(menu.url);
  useEffect(() => {
    pathInclude && setIsDropDown(true);
  }, []);

  const theme = localStorage.theme;

  return (
    <li className="mb-1">
      {menu.subMenus ? (
        <div
          className="group"
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          <div
            onClick={() => setIsDropDown(!isDropDown)}
            style={{ color: (pathInclude || isHover) && currentColor }}
            className={`${
              !pathInclude && "text-gray-500 dark:text-gray-200 "
            } flex items-center gap-3 pl-4 text-sm font-medium  py-2 transition-all relative`}
          >
            <span className="text-xl"> {menu.icon}</span>
            {(activeMenu || !iconMenu) && menu.title}
            {(activeMenu || !iconMenu || pathInclude) && (
              <div className={` absolute top-3 right-1`}>
                <BiChevronUp
                  className={`${isDropDown && "rotate-180"} transtion-all`}
                />
              </div>
            )}
          </div>
          {isDropDown && (activeMenu || !iconMenu) && (
            <ul className={`${isDropDown ? "h-auto" : "h-0"} transition-all`}>
              {menu.subMenus.map((submenu, h) => (
                <li key={h}>
                  <SubMenuItem submenu={submenu} />
                </li>
              ))}
            </ul>
          )}
        </div>
      ) : (
        <NavLink
          to={menu.url}
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          style={({ isActive }) => ({
            color:
              isActive || isHover
                ? currentColor
                : theme === "dark"
                ? navItemColorDark
                : navItemColorLight,
          })}
          className="flex items-center gap-3 pl-4 dark:text-red-800 text-sm font-medium  py-2 transition-all"
        >
          <span className="text-xl"> {menu.icon}</span>
          {(activeMenu || !iconMenu) && menu.title}
        </NavLink>
      )}
    </li>
  );
}

export default SidebarItem;
