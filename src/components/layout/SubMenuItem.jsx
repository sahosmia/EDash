import { useColorContext } from "../../contexts/ColorContextProvider";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const SubMenuItem = ({ submenu }) => {
  const { navItemColorDark, navItemColorLight, currentColor } =
    useColorContext();

  const [isHoverDropDown, setIsHoverDropDown] = useState(false);

  const theme = localStorage.theme;
  return (
    <NavLink
      onMouseEnter={() => setIsHoverDropDown(true)}
      onMouseLeave={() => setIsHoverDropDown(false)}
      className="flex items-center gap-3 pl-10 text-sm font-medium py-2 transition-all"
      to={submenu.url}
      style={({ isActive }) => ({
        color:
          isActive || isHoverDropDown
            ? currentColor
            : theme == "dark"
            ? navItemColorDark
            : navItemColorLight,
      })}
    >
      {submenu.title}
    </NavLink>
  );
};

export default SubMenuItem;
