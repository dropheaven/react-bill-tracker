import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { addExpense } from "./actions/expenses";
import "bootstrap/dist/css/bootstrap.css";
import "./styles/main.css";

const store = configureStore();
store.dispatch(
  addExpense({
    id: 1,
    category: "utilities",
    name: "Water bill",
    dueDate: "May 15, 2019",
    amount: 2000
  })
);

store.dispatch(
  addExpense({
    id: 2,
    category: "utilities",
    name: "Verizon Internet",
    dueDate: "July 01, 2019",
    amount: 8000
  })
);

store.dispatch(
  addExpense({
    id: 3,
    category: "health",
    name: "Gym",
    dueDate: "August 21, 2019",
    amount: 2500
  })
);
store.dispatch(
  addExpense({
    id: 4,
    category: "credit cards",
    name: "Citi",
    dueDate: "June 27, 2019",
    amount: 15000
  })
);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
ReactDOM.render(jsx, document.getElementById("root"));
