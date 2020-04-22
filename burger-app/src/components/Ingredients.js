import React, { Component } from "react";
import "./Ingredients.css";

class Ingredients extends Component {
  state = { count: 0 };

  addhandler = () => {
    this.setState({ count: this.state.count + 1 });
  };
  minushandler = () => {
    if (this.state.count >= 1) {
      this.setState({ count: this.state.count - 1 });
    }
  };

  render() {
    return (
      <div className="container">
        <span className="counter">{this.state.count}</span>&nbsp;
        <button className="button" onClick={this.addhandler}>
          +
        </button>
        <button className="button" onClick={this.minushandler}>
          -
        </button>
        &nbsp;
        <span className="text">{this.props.name}</span>
      </div>
    );
  }
}

export default Ingredients;
