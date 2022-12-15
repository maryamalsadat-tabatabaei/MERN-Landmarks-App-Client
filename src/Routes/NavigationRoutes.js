import { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import MainNavigation from "../shared/MainNavigation";

import * as pathName from "./Path";
import Spinner from "../shared/Spinner";

const Users = lazy(() => import("../users/Users"));
// const Signup = lazy(() => import("./Signup"));
// const Login = lazy(() => import("./Login"));

const NavigationRoutes = () => {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path={pathName.users} element={<Users />} />
            {/* <Route path={pathName.signup} element={<Signup />} /> */}
            {/* <Route path={pathName.login} element={<Login />} /> */}
            {/* <Route path={pathName.notFound} element={<NotFound />} /> */}
            <Route
              path={pathName.errorPage}
              element={<Navigate to={pathName.notFound} replace />}
            />
          </Routes>
        </Suspense>
      </main>
    </Router>
  );
};
export default NavigationRoutes;
