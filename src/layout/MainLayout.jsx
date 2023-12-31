import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { useAuthContext } from "../contexts/AuthContextProvider";
import { ThemeSettings, Sidebar, Navbar } from "../data/component";
import Loading from "../components/core/Loading";
import ThemeSettingButton  from "../components/layout/theme-settings/ThemeSettingButton";
import {
  activeMenuFalse,
  activeMenuTrue,
  hideMenuFalse,
  hideMenuTrue,
  setScreenSize,
} from "../features/common/commonSlice";

function MainLayout() {
  const { hideMenu, activeMenu, iconMenu, themeSettings, screenSize } =
    useSelector((state) => state.common);
 
  const dispatch = useDispatch();

  const { token } = useAuthContext();
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  useEffect(() => {
    dispatch(screenSize <= 900 ? activeMenuFalse() : activeMenuTrue());
    dispatch(screenSize <= 640 ? hideMenuTrue() : hideMenuFalse());
  }, [screenSize]);

  useEffect(() => {
    const handleResize = () => dispatch(setScreenSize(window.innerWidth));
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  

  if (token == null) {
    return <Navigate to="/signin" />;
  }

  return (
    <div className="flex relative">
      <ThemeSettingButton />

      <Sidebar />

      <div
        className={`${(activeMenu || !iconMenu) && " md:ml-72 "} ${
          !activeMenu && iconMenu && !hideMenu && "ml-20 flex-2"
        }  ${
          hideMenu && "ml-0 flex-2"
        }   bg-white dark:bg-dark-light-bg  min-h-screen w-full  transition-all duration-300 ease-in-out`}
      >
        <Navbar />

        <div className="p-4  max-md:mt-16 sm:max-md:ml-16">
          {loading ? <Loading /> : <Outlet />}
        </div>

      </div>

      {themeSettings && <ThemeSettings />}
    </div>
  );
}

export default MainLayout;
