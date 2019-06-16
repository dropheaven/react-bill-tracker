import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <div id="sidebar">
    <h1 id="logo">Expenser</h1>
    <NavLink exact to="/" className="nav-item">
      Dashboard
    </NavLink>
    <NavLink to="/expenses/new" exact={true}>
      New Expense
    </NavLink>
  </div>
);

export default Header;
