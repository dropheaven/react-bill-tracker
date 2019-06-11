import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <header>
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
  </header>
);

export default Header;
