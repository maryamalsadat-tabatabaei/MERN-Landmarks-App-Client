import * as pathName from "../../Routes/Path";
import { NavLink } from "react-router-dom";

import "./NavLinks.css";

const NavLinks = () => {
  return (
    <ul className="nav-links">
      <li>
        <NavLink end to={pathName.users}>
          ALL USERS
        </NavLink>
      </li>
      <li>
        <NavLink to="/u1/places">MY PLACES</NavLink>
      </li>
      <li>
        <NavLink to={pathName.createPlace}>ADD PLACE</NavLink>
      </li>
      <li>
        <NavLink to={pathName.authentication}>AUTHENTICATE</NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
