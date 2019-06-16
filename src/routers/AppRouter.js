import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "../components/Header";
import Dashboard from "../components/Dashboard";
import AddExpense from "../components/AddExpense";
import EditExpense from "../components/EditExpense";
import ShowExpense from "../components/ShowExpense";
import NotFound from "../components/NotFound";

const AppRouter = () => (
  <Router>
    <div id="main-container">
      <Header />
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/expenses/new" component={AddExpense} />
        <Route path="/expenses/:id/edit" component={EditExpense} />
        <Route path="/expenses/:id" component={ShowExpense} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
