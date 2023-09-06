// react all icon
import { IoClose } from "react-icons/io5";
import { BsLightningChargeFill } from "react-icons/bs";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";
import { FiSettings } from "react-icons/fi";
// react all icon end

import { useStateContext } from "../../contexts/ContextProvider";
import { useColorContext } from "../../contexts/ColorContextProvider";
import { colors } from "../../data/dummy";

function ThemeSettings() {
  const { setThemeSettings } = useStateContext();
  const { currentColor, setCurrentColor } = useColorContext();

  // ================== All Handle Method ===============
  // Theme setting close
  const handleClose = (e) => {
    if (e.target.id === "settings-sidebar") {
      setThemeSettings(false);
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
    setCurrentColor(color);
  };

  // ===================== JSX Data =================
  //********* Class *********

  // Dark Item Btn class
  const darkItemClass =
    "flex items-center py-3 pl-5 pr-6 rounded-full cursor-pointer ring-inset ring-main hover:ring-2 bg-gray-100 dark:bg-dark-light-bg text-gray-700 dark:text-gray-400 transition-all ease-in-out duration-300";

  // ********* Component *********

  // Setting Box Title and Close
  const SettingTitleBox = () => (
    <div
      className="flex justify-between px-8 h-16 items-center"
      style={{ backgroundColor: currentColor }}
    >
      <div className="flex items-center gap-2">
        <FiSettings className="text-white text-2xl" />
        <h2 className="text-xl text-white ">Settings</h2>
      </div>
      <IoClose
        className="text-2xl text-gray-100 cursor-pointer"
        onClick={() => setThemeSettings(false)}
      />
    </div>
  );
  // Title
  const Title = ({ title }) => (
    <h4 className=" font-medium text-gray-400 text-sm">{title}</h4>
  );

  const DarkItem = ({ title, icon, handelmethod }) => (
    <div className={darkItemClass} onClick={handelmethod}>
      {icon}
      <div className="flex items-center ml-2 font-medium leading-5 text-secondary">
        {title}
      </div>
    </div>
  );
  return (
    <div
      className=" fixed inset-0 shadow-lg bg-half-transparent"
      id="settings-sidebar"
      onClick={handleClose}
    >
      <div className="bg-white dark:bg-dark-white-bg w-96 transition-all duration-300 ease-in-out absolute top-0 right-0 bottom-0 z-100">
        <SettingTitleBox />
        <div className="p-8 bg-white dark:bg-dark-white-bg">
          {/* <!----- Theme Mode -----!>  */}
          <div>
            <Title title="Theme Setting" />

            <div className="grid grid-cols-3 gap-3 justify-items-start mt-4">
              {/* <!----- Theme Mode Item Start -----!>  */}

              <DarkItem
                title="Auto"
                icon={<BsLightningChargeFill />}
                handelmethod={() => handleAutoMode("auto")}
              />
              <DarkItem
                title="Dark"
                icon={<MdDarkMode />}
                handelmethod={() => handleAutoMode("dark")}
              />
              <DarkItem
                title="Light"
                icon={<MdOutlineLightMode />}
                handelmethod={() => handleAutoMode("light")}
              />

              {/* <!----- Theme Mode Item End -----!>  */}
            </div>
            <hr className="my-8" />
          </div>
          <div>
            <Title title="Theme Color" />
            <div className="grid grid-cols-7 gap-2 justify-items-start mt-4">
              {colors.map((color) => (
                <div
                  key={color}
                  className="w-10 h-10 rounded-full cursor-pointer transition-all ease-in-out duration-300"
                  style={{ backgroundColor: color }}
                  onClick={() => handleColorChange(color)}
                ></div>
              ))}
            </div>
            <hr className="my-8" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThemeSettings;
