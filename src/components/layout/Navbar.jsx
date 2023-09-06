import { useRef, useEffect, useState } from "react";
// react all icon
import { BsGearFill } from "react-icons/bs";
import { TbAlignJustified } from "react-icons/tb";
import { IoSearch } from "react-icons/io5";
import { MdOutlineDarkMode } from "react-icons/md";
import { PiSignInBold } from "react-icons/pi";
import { HiOutlineSun } from "react-icons/hi";
import {
  BiChevronDown,
  BiChevronUp,
  BiBell,
  BiSolidUser,
  BiSolidEditAlt,
  BiLogOutCircle,
} from "react-icons/bi";
// react all icon end

import SearchCard from "../dropdown/SearchCard";
import { useStateContext } from "../../contexts/ContextProvider";
import { useAuthContext } from "../../contexts/AuthContextProvider";
import { useColorContext } from "../../contexts/ColorContextProvider";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const { setToken, user } = useAuthContext();
  const navigate = useNavigate();

  const {
    activeMenu,
    setActiveMenu,
    searchInput,
    setSearchInput,
    modeOption,
    setModeOption,
    screenSize,
    setScreenSize,
    hideMenu,
    setHideMenu,
    setThemeSettings,
  } = useStateContext();

  const { navItemColorDark, navItemColorLight } = useColorContext();

  const searchCardList = useRef(null);
  const profileDropdown = useRef(null);

  const [searchCard, setSearchCard] = useState(false);
  const [profileDropdownCard, setProfileDropdownCard] = useState(false);
  const theme = localStorage.theme;

  // close on click outside
  useEffect(() => {
    const clickHandler2 = ({ target }) => {
      if (!profileDropdown.current) return;
      if (!profileDropdownCard || profileDropdown.current.contains(target))
        return;
      setProfileDropdownCard(false);
    };
    document.addEventListener("click", clickHandler2);
    return () => document.removeEventListener("click", clickHandler2);
  });

  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!searchCardList.current) return;
      if (!searchCard || searchCardList.current.contains(target)) return;
      setSearchCard(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }

    if (screenSize <= 640) {
      setHideMenu(true);
    } else {
      setHideMenu(false);
    }
  }, [screenSize]);

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleMenu = () => {
    setActiveMenu(!activeMenu);
    if (screenSize <= 640) {
      setHideMenu(!hideMenu);
    }
  };
  // const logout = () => {
  //   setToken();
  // };

  const handleDarkMode = () => {
    setModeOption(modeOption === "light" ? "dark" : "light");
    if (theme === "dark") {
      localStorage.theme = "light";
    } else {
      localStorage.theme = "dark";
    }
  };
  const handleCloseSearchCard = () => {
    setSearchCard(false);
  };

  return (
    <div className="fixed  flex items-center justify-between md:static bg-gray-50 dark:bg-dark-white-bg  navbar w-full h-20 p-4 shadow dark:shadow-gray-700">
      <div className="flex items-center">
        <TbAlignJustified
          className="text-2xl text-gray-600 dark:text-gray-300 cursor-pointer"
          onClick={toggleMenu}
        />

        {/* Search Section Strat  */}
        <div className="hidden md:flex items-center p-1 bg-gray-200 dark:bg-dark-light-bg shadow shadow-gray-200 dark:shadow-gray-900 ml-5 w-60 relative ">
          <IoSearch className="mx-1 text-gray-600" />
          <input
            type="text"
            className="text-sm text-gray-600 dark:text-gray-200 p-1 focus:outline-none bg-transparent"
            placeholder="Search..."
            value={searchInput}
            onChange={(e) => (
              setSearchInput(e.target.value), setSearchCard(true)
            )}
          />

          {searchCard && (
            <div
              ref={searchCardList}
              className=" absolute top-10 left-0 bg-white rounded shadow p-5 w-72 h-96 overflow-auto"
            >
              <SearchCard onCloseSearchCard={handleCloseSearchCard} />
            </div>
          )}
        </div>
        {/* Search Section End  */}
      </div>

      <div>
        <div className="flex items-center gap-3 md:gap-5">
          <div className=" bg-neutral-200  w-7 h-7 flex justify-center items-center rounded-full ">
            <BiBell />
          </div>

          <div
            onClick={handleDarkMode}
            className=" bg-neutral-200  w-7 h-7 flex justify-center items-center rounded-full "
          >
            {theme == "light" ? <MdOutlineDarkMode /> : <HiOutlineSun />}
          </div>
          <div ref={profileDropdown}>
            <div
              className="flex items-center hover:cursor-pointer "
              onClick={() => (
                setProfileDropdownCard(!profileDropdownCard)
              )}
            >
              <img
                src="/images/avatar.jpg"
                alt="profile"
                className="w-8 h-8 rounded-full mr-2"
              />
              <span className="font-medium md:font-bold text-xs md:text-sm text-gray-600">
                {user}
              </span>

              {/* {profileDropdownCard ? (
                <BiChevronUp className="text-gray-600 block" />
              ) : (
                <BiChevronDown className="text-gray-600 block" />
              )} */}
            </div>
            {profileDropdownCard && (
              <div className=" absolute top-16 right-2 bg-white rounded shadow p-5 w-56 h-auto overflow-auto">
                <ul className=" divide-y-2">
                  <li
                    className="py-2 pl-1 last:pb-0 first:pt-0 font-medium text-gray-600 flex items-center gap-1"
                    onClick={() => (
                      setProfileDropdownCard(false), navigate("/profile")
                    )}
                  >
                    <BiSolidUser />
                    <span> Profile</span>
                  </li>
                  <li
                    className="py-2 pl-1 last:pb-0 first:pt-0 font-medium text-gray-600 flex items-center gap-1"
                    onClick={() => (
                      setProfileDropdownCard(false), navigate("/edit-profile")
                    )}
                  >
                    <BiSolidEditAlt />
                    <span> Edit Profile</span>
                  </li>
                  <li
                    className="py-2 pl-1 last:pb-0 first:pt-0 font-medium text-gray-600 flex items-center gap-1"
                    onClick={() => (
                      setProfileDropdownCard(false), setThemeSettings(true)
                    )}
                  >
                    <BsGearFill />
                    <span> Settings Theme</span>
                  </li>
                  <li
                    className="py-2 pl-1 last:pb-0 first:pt-0 font-medium text-gray-600 flex items-center gap-1"
                    onClick={() => (setProfileDropdownCard(false), setToken())}
                  >
                    <BiLogOutCircle />
                    <span> Logout</span>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
