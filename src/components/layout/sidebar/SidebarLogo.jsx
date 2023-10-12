import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export function SidebarLogo() {
    const commonState = useSelector((state) => state.common);
    const { iconMenu, activeMenu, currentColor } = commonState;
  return (
    <Link to="/">
      <div className=" text-2xl font-bold text-neutral-900 dark:text-white text-center py-5">
        <span
          style={{
            color: currentColor,
          }}
        >
          E.
        </span>
        {(activeMenu || !iconMenu) && "Dash"}
      </div>
    </Link>
  );
}
