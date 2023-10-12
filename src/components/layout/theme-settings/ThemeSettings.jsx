import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentColor,
  themeSettingsFalse,
} from "../../../features/common/commonSlice";

// react all icon
import HeadThemeSettings from "./HeadThemeSettings";
import BodyThemeSettings from "./BodyThemeSettings";

function ThemeSettings() {
  const commonState = useSelector((state) => state.common);
  const { currentColor } = commonState;
  const dispatch = useDispatch();

  // ================== All Handle Method ===============
  // Theme setting close
  const handleClose = (e) => {
    if (e.target.id === "settings-sidebar") {
      dispatch(themeSettingsFalse());
    }
  };

  // Theme Mode Change
  const handleAutoMode = (color) => {
    if (color == "auto") {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        document.documentElement.classList.add("dark");
        localStorage.theme = "dark";
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.theme = "light";
      }
    } else if (color == "light") {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    } else {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    }
  };

  // Theme Color
  const handleColorChange = (color) => {
    localStorage.color = color;
    dispatch(setCurrentColor(color));
  };

  return (
    <div
      className=" fixed inset-0 shadow-lg bg-half-transparent"
      id="settings-sidebar"
      onClick={handleClose}
    >
      <div className="bg-white dark:bg-dark-white-bg w-96 transition-all duration-300 ease-in-out absolute top-0 right-0 bottom-0 z-100">
        <HeadThemeSettings currentColor={currentColor} dispatch={dispatch} />

        <BodyThemeSettings
          handleAutoMode={handleAutoMode}
          handleColorChange={handleColorChange}
        />
      </div>
    </div>
  );
}

export default ThemeSettings;
