import React from "react";
import { Link } from "react-router-dom";

const Expense = ({ id, name, category, dueDate, amount }) => (
  <div className="card border-dark">
    <div className="card-header bg-transparent border-dark">{name}</div>
    <div className="card-body">
      <h4 className="card-title">${amount * 0.01}</h4>
      <p className="card-text">Due on {dueDate}</p>
    </div>
    <div className="card-footer bg-transparent border-dark">
      <Link to={`/expenses/${id}`}>
        <button type="button" className="btn btn-primary">
          details
        </button>
      </Link>
      <Link to={`/expenses/${id}/edit`}>
        <button type="button" className="btn btn-primary">
          edit
        </button>
      </Link>
    </div>
  </div>
);

export default Expense;
