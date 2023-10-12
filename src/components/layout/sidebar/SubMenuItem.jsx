import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const SubMenuItem = ({ submenu }) => {
  const theme = localStorage.theme;
  const commonState = useSelector((state) => state.common);
  const { navItemColorDark, navItemColorLight, currentColor } = commonState;
  const dispatch = useDispatch();

  const [isHoverDropDown, setIsHoverDropDown] = useState(false);

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
            : theme === "dark" 
            ? navItemColorDark
            : navItemColorLight,
      })}
    >
      {submenu.title}
    </NavLink>
  );
};

export default SubMenuItem;
