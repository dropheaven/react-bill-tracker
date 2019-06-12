import React from "react";

const Expense = props => (
  <div className="card">
    <div className="card-body">
      <h5 className="card-title">{props.name}</h5>
      <h6 className="card-subtitle mb-2 text-muted">{props.category}</h6>
      <h4 className="card-text">Due on {props.dueDate}</h4>
      <h1 className="card-text">{props.amount}</h1>
      <a href="/" className="card-link">
        details
      </a>
      <a href="/" className="card-link">
        edit
      </a>
    </div>
  </div>
);

export default Expense;
