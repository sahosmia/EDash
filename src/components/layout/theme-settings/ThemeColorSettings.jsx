import { colors } from "../../../data/dummy";
import TitleThemeSettings from "./TitleThemeSettings";

export default function ThemeColorSettings(props) {
  return (
    <div>
      <TitleThemeSettings title="Theme Color" />
      <div className="grid grid-cols-7 gap-2 justify-items-start mt-4">
        {colors.map((color) => (
          <div
            key={color}
            className="w-10 h-10 rounded-full cursor-pointer transition-all ease-in-out duration-300"
            style={{
              backgroundColor: color,
            }}
            onClick={() => props.handleColorChange(color)}
          ></div>
        ))}
      </div>
      <hr className="my-8" />
    </div>
  );
}
