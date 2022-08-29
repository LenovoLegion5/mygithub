import React from "react";
import logo from "../img/Github-Logo-White.png";
// GET : SEARCH URL : https://api.github.com/search/users?q=LenovoLegion5
function Nav() {
  return (
    <nav>
      <div className="container-fluid px-4 d-flex align-items-center">
        <img className="logo" src={logo} alt="logo" />
        <input
          placeholder="Search or jump to..."
          type="text"
          name="searchQ"
          className="nav__input h-25"
        />
        <span className="slash">/</span>
        <div>
          <ul className="nav__list">
            <li className="nav__li">
              <a className="nav__link" href="#">
                Pull requests
              </a>
            </li>
            <li className="nav__li">
              <a className="nav__link" href="#">
                Issues
              </a>
            </li>
            <li className="nav__li">
              <a className="nav__link" href="#">
                Marketplace
              </a>
            </li>
            <li className="nav__li">
              <a className="nav__link" href="#">
                Explore
              </a>
            </li>
          </ul>
        </div>
        <div className="icons">
          <i className="fa-solid fa-bell"></i>
          <i className="fa-solid fa-plus"></i>
          <img
            className="avatar_img"
            src="https://avatars.githubusercontent.com/u/96075955?v=4"
            alt="avatar"
          />
        </div>
      </div>
    </nav>
  );
}

export default Nav;
