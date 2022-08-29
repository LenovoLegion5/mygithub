import React from "react";
import logo from "../img/Github-Logo-White.png";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer__wrapper">
          <img className="footer__logo" src={logo} alt="logo" />
          <span className="footer__i">© 2022 GitHub, Inc.</span>
          <ul className="footer__list">
            <li>
              <a href="" className="footer__link">
                Terms
              </a>
            </li>
            <li>
              <a href="" className="footer__link">
                Privacy
              </a>
            </li>
            <li>
              <a href="" className="footer__link">
                Security
              </a>
            </li>
            <li>
              <a href="" className="footer__link">
                Status
              </a>
            </li>
            <li>
              <a href="" className="footer__link">
                Docs
              </a>
            </li>
            <li>
              <a href="" className="footer__link">
                Contact Github
              </a>
            </li>
            <li>
              <a href="" className="footer__link">
                Pricing
              </a>
            </li>
            <li>
              <a href="" className="footer__link">
                API
              </a>
            </li>
            <li>
              <a href="" className="footer__link">
                Training
              </a>
            </li>
            <li>
              <a href="" className="footer__link">
                Blog
              </a>
            </li>
            <li>
              <a href="" className="footer__link">
                About
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
