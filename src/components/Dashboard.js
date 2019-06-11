import React from "react";
import Expense from "./Expense";

const Dashboard = () => (
  <div id="expenses">
    <Expense name="Electricity" amount="$65" category="utilities" />
    <Expense name="Internet" amount="$80" category="utilities" />
  </div>
);

export default Dashboard;
