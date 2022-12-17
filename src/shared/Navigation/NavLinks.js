import { useContext } from "react";
import * as pathName from "../../Routes/Path";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/auth-context";
import "./NavLinks.css";

const NavLinks = () => {
  const auth = useContext(AuthContext);
  return (
    <ul className="nav-links">
      <li>
        <NavLink end to={pathName.users}>
          ALL USERS
        </NavLink>
      </li>
      {auth.isLoggedIn && (
        <li>
          <NavLink to="/u1/places">MY PLACES</NavLink>
        </li>
      )}
      {auth.isLoggedIn && (
        <li>
          <NavLink to={pathName.createPlace}>ADD PLACE</NavLink>
        </li>
      )}
      {!auth.isLoggedIn && (
        <li>
          <NavLink to={pathName.authentication}>AUTHENTICATE</NavLink>
        </li>
      )}
      {auth.isLoggedIn && <button onClick={auth.logout}>Logout</button>}
    </ul>
  );
};

export default NavLinks;
