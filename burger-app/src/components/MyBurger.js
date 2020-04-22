import React, { Component } from "react";
import "./MyBurger.css";
import Modal from "./Modal";
class myBurger extends Component {
  render() {
    return (
      <>
        <div className="nav">Build My Burger</div>
        <div className="center">My burger will be shown here</div>
      </>
    );
  }
}

export default myBurger;
