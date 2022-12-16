import { useState } from "react";
import { Navigation } from "./Navigation";
import MainHeader from "./MainHeader";
import SideDrawer from "./../UIElements/SideDrawer";
import Backdrop from "../UIElements/Backdrop";
import { Link } from "react-router-dom";
import * as pathName from "../../Routes/Path";

const MainNavigation = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const openDrawerHandler = () => {
    return setIsDrawerOpen(true);
  };
  const closeDrawerHandler = () => {
    return setIsDrawerOpen(false);
  };
  return (
    <>
      {isDrawerOpen && <Backdrop onClick={closeDrawerHandler} />}

      <SideDrawer show={isDrawerOpen} onClick={closeDrawerHandler}>
        <Navigation className="main-navigation__drawer-nav">
          <Navigation.List>
            <Navigation.Item>
              <Navigation.Link to={pathName.users}>All Users</Navigation.Link>
            </Navigation.Item>
            <Navigation.Item>
              <Navigation.Link to={pathName.selectedPlaces}>
                My Places
              </Navigation.Link>
            </Navigation.Item>
            <Navigation.Item>
              <Navigation.Link to={pathName.createPlace}>
                Add Place
              </Navigation.Link>
            </Navigation.Item>
            <Navigation.Item>
              <Navigation.Link to={pathName.authentication}>
                Authenticate
              </Navigation.Link>
            </Navigation.Item>
          </Navigation.List>
        </Navigation>
      </SideDrawer>

      <MainHeader>
        <button
          className="main-navigation__menu-btn"
          onClick={openDrawerHandler}
        >
          <span />
          <span />
          <span />
        </button>
        <h1 className="main-navigation__title">
          <Link to={pathName.users}>Your Places</Link>
        </h1>
        <Navigation className="main-navigation__header-nav">
          <Navigation.List>
            <Navigation.Item>
              <Navigation.Link to={pathName.users}>All Users</Navigation.Link>
            </Navigation.Item>
            <Navigation.Item>
              <Navigation.Link to={pathName.selectedPlaces}>
                My Places
              </Navigation.Link>
            </Navigation.Item>
            <Navigation.Item>
              <Navigation.Link to={pathName.createPlace}>
                Add Place
              </Navigation.Link>
            </Navigation.Item>
            <Navigation.Item>
              <Navigation.Link to={pathName.authentication}>
                Authenticate
              </Navigation.Link>
            </Navigation.Item>
          </Navigation.List>
        </Navigation>
      </MainHeader>
    </>
  );
};
export default MainNavigation;
