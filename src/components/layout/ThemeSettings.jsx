import React from "react";
import { useStateContext } from "../../contexts/ContextProvider";

function ThemeSettings() {
  const { setThemeSettings } = useStateContext();
  const handleClose = (e) => {
    if (e.target.id === "settings-sidebar") {
      setThemeSettings(false);
    }
  };
  return (
    <div
      className=" fixed inset-0 shadow-lg"
      id="settings-sidebar"
      onClick={handleClose}
    >
      <div className="bg-white w-96 p-8 transition-all duration-300 ease-in-out absolute top-0 right-0 bottom-0">
        <div> this is thme setting</div>
      </div>
    </div>
  );
}

export default ThemeSettings;
