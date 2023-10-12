import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { BiChevronUp } from "react-icons/bi";
import { useSelector } from "react-redux";

// Internal Import
import SubMenuItem from "./SubMenuItem";

function SidebarItem({ menu }) {
  const { subMenus, title, icon, url } = menu;

  // redux
  const commonState = useSelector((state) => state.common);
  const {
    iconMenu,
    activeMenu,
    navItemColorDark,
    navItemColorLight,
    currentColor,
    
  } = commonState;

  // local state
  const [isDropDown, setIsDropDown] = useState(false);
  const [isHover, setIsHover] = useState(false);

  // const
const theme = localStorage.theme
  // get url use location
  const location = useLocation();
  const { pathname } = location;
  const pathInclude = pathname.includes(url);

  // useEffect
  useEffect(() => {
    pathInclude && setIsDropDown(true);
  }, [pathInclude]);

  return (
    <li className="mb-1">
      {subMenus ? (
        <div
          className="group"
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          <div
            onClick={() => setIsDropDown(!isDropDown)}
            style={{ color: (pathInclude || isHover) && currentColor }}
            className={`${
              !pathInclude && "text-gray-800 dark:text-gray-200 "
            } flex items-center gap-3 pl-4 text-sm font-medium  py-2 transition-all relative`}
          >
            <span className="text-xl"> {icon}</span>
            {(activeMenu || !iconMenu) && title}
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
              {subMenus.map((submenu, h) => (
                <li key={h}>
                  <SubMenuItem submenu={submenu} />
                </li>
              ))}
            </ul>
          )}
        </div>
      ) : (
        <NavLink
          to={url}
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
          className="flex items-center gap-3 pl-4 text-gray-500 dark:text-gray-200 text-sm font-medium  py-2 transition-all"
        >
          <span className="text-xl"> {icon}</span>
          {(activeMenu || !iconMenu) && title}
        </NavLink>
      )}
    </li>
  );
}

export default SidebarItem;
