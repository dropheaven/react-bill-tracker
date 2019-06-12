import React from "react";
import Expense from "./Expense";

const Dashboard = () => (
  <div id="expenses">
    <Expense
      name="Electricity"
      amount="$65"
      dueDate="July 5, 2019"
      category="utilities"
    />
    <Expense
      name="Internet"
      amount="$80"
      dueDate="Dec 12, 2020"
      category="utilities"
    />
  </div>
);

export default Dashboard;
