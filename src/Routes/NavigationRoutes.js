import { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import MainNavigation from "../shared/Navigation/MainNavigation";

import * as pathName from "./Path";
import Spinner from "../shared/UIElements/Spinner";

const Users = lazy(() => import("../components/users/Users"));
const UserPlaces = lazy(() => import("../components/places/UserPlaces"));
const PageNotFound = lazy(() => import("../components/404/404"));

const NavigationRoutes = () => {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path={pathName.users} element={<Users />} />
            <Route path={pathName.userPlaces} element={<UserPlaces />} />
            <Route
              path={pathName.errorPage}
              element={<Navigate to={pathName.notFound} replace />}
            />
            {/* <Route path={pathName.notFound} element={<PageNotFound />} /> */}
          </Routes>
        </Suspense>
      </main>
    </Router>
  );
};
export default NavigationRoutes;
