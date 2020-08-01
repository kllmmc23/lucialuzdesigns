import React from "react";
import { NavLink } from "react-router-dom";

const logo =
  "./logo.jpg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__logo-box">
        <NavLink to='/'><img src={logo} alt="Logo" className="footer__logo" /></NavLink>
        <div className="row">
          <div className="col-1-of-2">
            <div className="footer__navigation">
              <ul className="footer__list">
                <li className="footer__items">
                  <NavLink to="/" className="footer__link">
                    Home
                  </NavLink>
                </li>
                <li className="footer__items">
                  <NavLink to="/about" className="footer__link">
                    About 
                  </NavLink>
                </li>
                <li className="footer__items">
                  <NavLink to="/gallery" className="footer__link">
                    Gallery
                  </NavLink>
                </li>
                {/* <li className="footer__items"><NavLink to="/features" className="footer__link">Features</NavLink></li> */}
                <li className="footer__items">
                  <NavLink to="/booking" className="footer__link">
                    Contact 
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-1-of-2">
            <p className="footer__copyright">
              Built by{" "}
              <a href="https://melliott.io" target='_blank' rel="noopener noreferrer" className="footer__link">
                {" "}
                M.E.{" "}
              </a>{" "}
              Copyright &copy; 2020-{new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
