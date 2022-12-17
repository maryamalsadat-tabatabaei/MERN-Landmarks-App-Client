import { Suspense, lazy, useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import * as pathName from "./Path";
import MainNavigation from "../shared/Navigation/MainNavigation";
import Spinner from "../shared/UIElements/Spinner";
import { AuthContext } from "../shared/context/auth-context";

const Users = lazy(() => import("../components/users/Users"));
const UserPlaces = lazy(() => import("../components/places/UserPlaces"));
const CreatePlace = lazy(() => import("../components/places/NewPlaces"));
const UpdatePlace = lazy(() => import("../components/places/UpdatePlace"));
const Auth = lazy(() => import("../components/users/Auth"));
const ErrorPage = lazy(() => import("../components/ErrorPage/ErrorPage"));

const NavigationRoutes = () => {
  const auth = useContext(AuthContext);
  let routes = auth.isLoggedIn ? (
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
  ) : (
    <Routes>
      <Route path={pathName.users} element={<Users />} />
      <Route path={pathName.userPlaces} element={<UserPlaces />} />
      <Route path={pathName.authentication} element={<Auth />} />
      <Route
        path={pathName.errorPage}
        element={<Navigate to={pathName.authentication} replace />}
      />
    </Routes>
  );
  return (
    <Router>
      <MainNavigation />
      <main>
        <Suspense fallback={<Spinner />}>{routes}</Suspense>
      </main>
    </Router>
  );
};
export default NavigationRoutes;
