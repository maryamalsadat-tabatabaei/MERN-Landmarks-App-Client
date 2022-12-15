import { NavLink } from "react-router-dom";
import "./MainNavigation.css";
import "./NavLinks.css";

export function Navigation({ children, ...restProps }) {
  return <nav {...restProps}>{children}</nav>;
}
Navigation.List = function NavigationList({ children, ...restProps }) {
  return (
    <ul className="nav-links" {...restProps}>
      {children}
    </ul>
  );
};

Navigation.Item = function NavigationItem({ children, ...restProps }) {
  return <li {...restProps}>{children}</li>;
};

Navigation.Link = function NavigationLink({ children, ...restProps }) {
  return <NavLink {...restProps}>{children}</NavLink>;
};
