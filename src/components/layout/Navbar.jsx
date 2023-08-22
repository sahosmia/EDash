import React, { useRef, useEffect, useState } from "react";
import { useStateContext } from "../../contexts/ContextProvider";
import { TbAlignJustified } from "react-icons/tb";
import { IoSearch } from "react-icons/io5";
import { MdOutlineDarkMode } from "react-icons/md";
import { HiOutlineSun } from "react-icons/hi";
import { BiChevronDown, BiChevronUp, BiBell } from "react-icons/bi";
import SearchCard from "../dropdown/SearchCard";

function Navbar() {
  const {
    activeMenu,
    setActiveMenu,
    iconMenu,
    setIconMenu,
    searchInput,
    setSearchInput,
    searchCard,
    setSearchCard,
    profileOptionList,
    setProfileOptionList,
    modeOption,
    setModeOption,
    notificationOption,
    setNotificationOption,
    screenSize,
    setScreenSize,
  } = useStateContext();

  const searchCardList = useRef(null);

  window.addEventListener("click", (e) => {
    if (
      e.target !== searchCardList.current &&
      !searchCardList.current.contains(e.target)
    ) {
      setSearchCard(false);
    }
  });

  const toggleMenu = () => {
    setActiveMenu(!activeMenu);
  };

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
  }, [screenSize]);

  return (
    <div className="fixed  flex items-center justify-between md:static bg-gray-50  navbar w-full h-20 p-4 shadow">
      <div className="flex items-center">
        <TbAlignJustified
          className="text-2xl text-gray-600"
          onClick={toggleMenu}
        />

        {/* Search Section Strat  */}
        <div className="hidden md:flex items-center p-1 bg-gray-200 shadow shadow-gray-200 ml-5 w-60 relative ">
          <IoSearch className="mx-1 text-gray-600" />
          <input
            type="text"
            className="text-sm text-gray-600  p-1 focus:outline-none bg-transparent"
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
              <SearchCard />
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

          <div className=" bg-neutral-200  w-7 h-7 flex justify-center items-center rounded-full ">
            {modeOption ? <MdOutlineDarkMode /> : <HiOutlineSun />}
          </div>
          <div
            className="flex items-center hover:cursor-pointer"
            onClick={() => setProfileOptionList(!profileOptionList)}
          >
            <img
              src="/images/avatar.jpg"
              alt="profile"
              className="w-8 h-8 rounded-full mr-2"
            />
            <span className="font-medium md:font-bold text-xs md:text-sm text-gray-600">
              Sahos Mia
            </span>
            {profileOptionList ? (
              <BiChevronUp className="text-gray-600" />
            ) : (
              <BiChevronDown className="text-gray-600" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
