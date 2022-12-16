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
const CreatePlace = lazy(() => import("../components/places/NewPlaces"));
const UpdatePlace = lazy(() => import("../components/places/UpdatePlace"));
const ErrorPage = lazy(() => import("../components/ErrorPage/ErrorPage"));

const NavigationRoutes = () => {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path={pathName.users} element={<Users />} />
            <Route path={pathName.userPlaces} element={<UserPlaces />} />
            <Route path={pathName.createPlace} element={<CreatePlace />} />
            <Route path={pathName.getPlaceById} element={<UpdatePlace />} />
            <Route path={pathName.notFound} element={<ErrorPage />} />
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
