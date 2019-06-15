import React from "react";
import ExpenseForm from "./ExpenseForm";

const AddExpense = () => (
  <div className="container text-center" id="expense-form">
    <h1 className="text-center mb-3">New Expense</h1>
    <ExpenseForm />
  </div>
);

export default AddExpense;
