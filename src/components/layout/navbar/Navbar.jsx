import { useRef, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useAuthContext } from "../../../contexts/AuthContextProvider";

import { setSearchCard } from "../../../features/common/commonSlice";
import NavbarLeftSide from "./NavbarLeftSide";
import NavbarRightSide from "./NavbarRightSide";

function Navbar() {
  const commonState = useSelector((state) => state.common);
  const { searchCard } = commonState;
  const dispatch = useDispatch();

  const { setToken, user } = useAuthContext();

  // const [modeOption, setModeOption] = useState("light");
  const [profileDropdownCard, setProfileDropdownCard] = useState(false);

  const searchCardList = useRef(null);
  const profileDropdown = useRef(null);

  const theme = localStorage.theme;

  const isDark =
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);

  const isDropdown = (target) =>
    !profileDropdown.current ||
    !profileDropdownCard ||
    profileDropdown.current.contains(target);

  // close on click outside ======  Use Effect
  useEffect(() => {
    const clickHandler2 = ({ target }) => {
      if (isDropdown(target)) return;
      setProfileDropdownCard(false);
    };
    document.addEventListener("click", clickHandler2);
    return () => document.removeEventListener("click", clickHandler2);
  });

  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!searchCardList.current) return;
      if (!searchCard || searchCardList.current.contains(target)) return;
      dispatch(setSearchCard(false));
    };

    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
      console.log("dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
      console.log("light");
    }
  }, [isDark]);

  return (
    <div className="fixed  flex items-center justify-between md:static bg-gray-50 dark:bg-dark-white-bg  navbar w-full h-20 p-4 shadow dark:shadow-gray-700">
      <NavbarLeftSide searchCardList={searchCardList} />

      <NavbarRightSide
        dispatch={dispatch}
        setToken={setToken}
        user={user}
        profileDropdownCard={profileDropdownCard}
        setProfileDropdownCard={setProfileDropdownCard}
        profileDropdown={profileDropdown}
        theme={theme}
      />
    </div>
  );
}

export default Navbar;
