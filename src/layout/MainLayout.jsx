import { IoClose } from "react-icons/io5";
import { FiSettings } from "react-icons/fi";
import { useEffect, useState } from "react";
import Loading from "../components/core/Loading";
import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";
import { useColorContext } from "../contexts/ColorContextProvider";
import { useAuthContext } from "../contexts/AuthContextProvider";
import { ThemeSettings, Sidebar, Navbar } from "../data/component";

function MainLayout() {
  const { activeMenu, iconMenu, hideMenu, themeSettings, setThemeSettings } =
    useStateContext();
  const { currentColor } = useColorContext();
  const { token, user } = useAuthContext();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  if (token == null) {
    return <Navigate to="/signin" />;
  }

  return (
    <div className="flex relative">
      <div className="fixed right-4 bottom-4">
        <button
          type="button"
          onClick={() => setThemeSettings(!themeSettings)}
          style={{ background: currentColor, borderRadius: "50%" }}
          className="text-2xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray rotate-36 transition-all duration-300 ease-in-out"
        >
          {themeSettings ? <IoClose /> : <FiSettings />}
        </button>
      </div>

      <Sidebar />
      <div
        className={`${(activeMenu || !iconMenu) && " md:ml-72 "} ${
          !activeMenu && iconMenu && !hideMenu && "ml-20 flex-2"
        }  ${
          hideMenu && "ml-0 flex-2"
        }   bg-gray-200 dark:bg-dark-light-bg  min-h-screen w-full  transition-all duration-300 ease-in-out`}
      >
        <Navbar />

        {/* Main Content Start  */}
        <div className="p-4 md:p-10 pt-10 max-md:mt-16 sm:max-md:ml-16">
          {loading ? <Loading /> : <Outlet />}
        </div>
        {/* Main Content End  */}
      </div>
      {themeSettings && <ThemeSettings />}
    </div>
  );
}

export default MainLayout;
