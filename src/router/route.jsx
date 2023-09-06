import { Route, Routes } from "react-router-dom";
import { backendRoute, frontRoute } from "../data/routeList";
import MainLayout from "../layout/MainLayout";
import NotFound from "../pages/NotFound";
import SignIn from "../pages/SignIn";

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

      <Route path="/signup" element={<SignIn />} />
      <Route path="/signin" element={<SignIn />} />

      <Route path="/not-found" element={<NotFound />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
