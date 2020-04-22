import React, { Component } from "react";
import Modal from "./Modal";
class OrderButton extends Component {
  state = {
    showModal: false,
  };
  modalToggle = () => {
    this.setState({ showModal: !this.state.showModal });
  };
  render() {
    return (
      <div
        style={{ display: "flex", justifyContent: "center", padding: "20px" }}
      >
        <button
          style={{
            padding: "10px",
            borderRadius: "2px",
          }}
          onClick={this.modalToggle}
        >
          Order Now
        </button>
        {this.state.showModal && (
          <div>
            <Modal toggle={this.modalToggle} />
          </div>
        )}
      </div>
    );
  }
}
export default OrderButton;
