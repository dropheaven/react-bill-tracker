import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <div id="sidebar">
    <h1>BillTracker</h1>
    <NavLink to="/" exact={true}>
      Dashboard
    </NavLink>
    <NavLink to="/create" exact={true}>
      Create Expense
    </NavLink>
    <NavLink to="/edit" exact={true}>
      Edit
    </NavLink>
  </div>
);

export default Header;
