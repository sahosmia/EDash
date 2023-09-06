import { useState, useContext, createContext } from "react";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [iconMenu, setIconMenu] = useState(true);
  const [hideMenu, setHideMenu] = useState(false);
  const [themeSettings, setThemeSettings] = useState(false);
  
  const [searchInput, setSearchInput] = useState("");
  const [searchCard, setSearchCard] = useState(false);
  const [profileOptionList, setProfileOptionList] = useState(false);
  const [modeOption, setModeOption] = useState("light");
  const [notificationOption, setNotificationOption] = useState(false);
  const [screenSize, setScreenSize] = useState(0);

  

  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        iconMenu,
        setIconMenu,
        themeSettings,
        setThemeSettings,
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
        hideMenu,
        setHideMenu,
       
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
