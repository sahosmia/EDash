import { createContext, useContext, useState } from "react";

const ColorContext = createContext();

export const ColorContextProvider = ({ children }) => {
  const color = localStorage.color ? localStorage.color : "#333333";
  const [currentColor, setCurrentColor] = useState(color);

  const navItemColorDark = "#fff";
  const navItemColorLight = "#333";
  return (
    <ColorContext.Provider
      value={{
        navItemColorDark,
        navItemColorLight,
        currentColor,
        setCurrentColor,
      }}
    >
      {children}
    </ColorContext.Provider>
  );
};

export const useColorContext = () => useContext(ColorContext);
