import React from "react";
import { NavLink } from "react-router-dom";

export const Nav = () => {
  const list = [
    { id: "1", title: "Home", to: "/" },
    { id: "2", title: "About Lucia", to: "/about" },
    { id: "3", title: "Gallery", to: "/gallery" },
    { id: "4", title: "Bookings", to: "/booking" },
  ];
  console.log(list);

  const unCheck = () => {
    document.getElementById("navi-toggle").checked = false;
  };
  return (
    <div className="navigation">
      <input
        type="checkbox"
        name="navi-toggle"
        id="navi-toggle"
        className="navigation__checkbox"
      />
      <label htmlFor="navi-toggle" className="navigation__button">
        <span className="navigation__icon">&nbsp;</span>
      </label>
      <div className="navigation__background">&nbsp;</div>
      <nav className="navigation__nav">
        <ul className="navigation__list">
          {list.map((list)=>
            <li className="navigation__item" key={list.id}>
              <NavLink
                to={list.to}
                className="navigation__link"
                onClick={unCheck}
              >
                {list.title}
              </NavLink>
            </li>
          )}
          
        </ul>
      </nav>
    </div>
  );
};
