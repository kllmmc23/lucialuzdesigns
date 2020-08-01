import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {

const logo = './logo.jpg'

  return (
    <header className="header">
      <div className="header__background">
        <div className="header__logo-box">
          <NavLink
            to="/"
            className="header__link"
            component={window.scroll(0,0)}
          >
            <img src={logo} alt="Logo" className="header__logo" />
          </NavLink>
        </div>

        <div className="header__text-box">
          <h1 className="heading-primary">
            <span className="heading-primary--main ">Lucia</span>
            <span className="heading-primary--sub">Model | Entrepeneur</span>
          </h1>
        </div>
      </div>
    </header>
  );
}
