import { useSelector } from "react-redux";

const useCommonState = () => {
  const commonState = useSelector((state) => state.common);
  const {
    activeMenu,
    iconMenu,
    hideMenu,
    themeSettings,
    navItemColorDark,
    navItemColorLight,
    currentColor,
    modeOption,
    screenSize,
    notificationOption,
  } = commonState;

  return [
    activeMenu,
    iconMenu,
    hideMenu,
    themeSettings,
    navItemColorDark,
    navItemColorLight,
    currentColor,
    modeOption,
    screenSize,
    notificationOption,
  ];
};

export default useCommonState;
