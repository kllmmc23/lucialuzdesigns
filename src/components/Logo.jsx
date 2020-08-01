import React from "react";
import { NavLink } from "react-router-dom";

const logo = ''

export default function Logo() {
  return (
    <NavLink to="/" className="header__logo-box">
      <img src={logo} alt="Logo" className="header__logo" />
    </NavLink>
  );
}
