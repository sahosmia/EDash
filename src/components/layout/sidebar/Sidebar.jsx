import { useDispatch, useSelector } from "react-redux";

// Internal Import
import {
  sideberMouseEnter,
  sideberMouseLeave,
} from "../../../features/common/commonSlice";
import { SidebarLogo } from "./SidebarLogo";
import { SidebarMenuSection } from "./SidebarMenuSection";

function Sidebar() {
  const commonState = useSelector((state) => state.common);
  const { iconMenu, hideMenu, activeMenu } = commonState;
  const dispatch = useDispatch();

  return (
    <div
      className={`${(activeMenu || !iconMenu) && "w-72"} ${
        !activeMenu && iconMenu && !hideMenu && "w-20"
      } ${
        hideMenu && "w-0"
      } fixed sidebar flex flex-col  bg-white dark:bg-dark-white-bg h-screen transition-all duration-300 ease-in-out shadow dark:shadow-gray-700`}
      onMouseEnter={() => dispatch(sideberMouseEnter())}
      onMouseLeave={() => dispatch(sideberMouseLeave())}
    >
      <SidebarLogo></SidebarLogo>

      <SidebarMenuSection></SidebarMenuSection>
    </div>
  );
}

export default Sidebar;
