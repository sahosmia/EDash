import { BsLightningChargeFill } from "react-icons/bs";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";
import DarkItem from "./DarkItem";
import TitleThemeSettings from "./TitleThemeSettings";

export default function ThemeModeSettings(props) {
  return (
    <div>
      <TitleThemeSettings title="Theme Setting" />

      <div className="grid grid-cols-3 gap-3 justify-items-start mt-4">
        <DarkItem
          title="Auto"
          icon={<BsLightningChargeFill />}
          handelmethod={() => props.handleAutoMode("auto")}
        />
        <DarkItem
          title="Dark"
          icon={<MdDarkMode />}
          handelmethod={() => props.handleAutoMode("dark")}
        />
        <DarkItem
          title="Light"
          icon={<MdOutlineLightMode />}
          handelmethod={() => props.handleAutoMode("light")}
        />
      </div>
      <hr className="my-8" />
    </div>
  );
}
