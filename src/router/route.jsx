import { Route, Routes } from "react-router-dom";
import { ECommerceDashboard, Category, CategoryCreate } from "../data/page";
import { backendRoute, frontRoute } from "../data/routeList";
import MainLayout from "../layout/MainLayout";
import NotFound from "../pages/NotFound";
import SignUp from "../pages/Signup";
import SignIn from "../pages/SignIn";
import { AuthContextProvider } from "../contexts/AuthContextProvider";

export default function route() {
  return (
    <Routes>
      {/* backend Route  */}

        <Route element={<MainLayout />}>
          {backendRoute.map(({ path, component: Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
        </Route>

      {/* frontend Route  */}
      {frontRoute.map(({ path, component: Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}

      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />

      <Route path="/not-found" element={<NotFound />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
