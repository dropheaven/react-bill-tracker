import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "../components/Header";
import Dashboard from "../components/Dashboard";
import AddExpense from "../components/AddExpense";
import EditExpense from "../components/EditExpense";
import NotFound from "../components/NotFound";

const AppRouter = () => (
  <Router>
    <React.Fragment>
      <Header />
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/create" component={AddExpense} />
        <Route path="/edit" component={EditExpense} />
        <Route component={NotFound} />
      </Switch>
    </React.Fragment>
  </Router>
);

export default AppRouter;