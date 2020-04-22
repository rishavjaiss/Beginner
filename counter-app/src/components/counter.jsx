import React, { Component } from "react";

export default class Counter extends Component {
  render() {
    return (
      <>
        {this.props.children}
        <span className={this.getBadge()}>{this.props.counter.value}</span>
        <button
          onClick={this.props.onIncrement(this.props.counter)}
          className="btn btn-success m-2 p-2 btn-sm"
        >
          <b>Increment</b>
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger m-2 p-2 btn-sm"
        >
          <b>Delete</b>
        </button>
      </>
    );
  }

  getBadge() {
    let classes = "badge p-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "info";
    return classes;
  }
}
