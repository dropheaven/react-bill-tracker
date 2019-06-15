import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { addExpense } from "./actions/expenses";
import "bootstrap/dist/css/bootstrap.css";
import "./styles/main.css";

const store = configureStore();
store.dispatch(addExpense({ id: 1, name: "water bill", amount: 7000 }));
store.dispatch(addExpense({ id: 1, name: "gas bill", amount: 3000 }));
console.log(store.getState());

ReactDOM.render(<AppRouter />, document.getElementById("root"));
