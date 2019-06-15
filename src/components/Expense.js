import React from "react";
import { Link } from "react-router-dom";

const Expense = ({ name, category, dueDate, amount }) => (
  <div className="card">
    <div className="card-body">
      <h5 className="card-title">{name}</h5>
      <h6 className="card-subtitle mb-2 text-muted">{category}</h6>
      <h5 className="card-text">Due on</h5>
      <h4 className="card-text">{dueDate}</h4>
      <h1 className="card-text">${amount * 0.01}</h1>
      <Link to="/">
        <button type="button" className="btn btn-primary">
          details
        </button>
      </Link>
      <Link to="/">
        <button type="button" className="btn btn-primary">
          edit
        </button>
      </Link>
    </div>
  </div>
);

export default Expense;
