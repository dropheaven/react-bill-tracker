import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <div id="sidebar">
    <h1>BillTracker</h1>
    <NavLink exact to="/">
      Dashboard
    </NavLink>
    <NavLink to="/create" exact={true}>
      Create Expense
    </NavLink>
  </div>
);

export default Header;
