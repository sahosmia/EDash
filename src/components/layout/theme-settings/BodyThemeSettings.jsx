import  ThemeModeSettings  from "./ThemeModeSettings";
import  ThemeColorSettings  from "./ThemeColorSettings";

export default function BodyThemeSettings(props) {
  return (
    <div className="p-8 bg-white dark:bg-dark-white-bg">
      <ThemeModeSettings handleAutoMode={props.handleAutoMode} />
      <ThemeColorSettings handleColorChange={props.handleColorChange} />
    </div>
  );
}
