import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Ingredients from "./components/Ingredients";
import MyBurger from "./components/MyBurger";
import OrderButton from "./components/OrderButton";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <MyBurger />
    <Ingredients name="Cheese" />
    <Ingredients name="Meat" />
    <Ingredients name="Patty" />
    <Ingredients name="Salad" />
    <OrderButton />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
