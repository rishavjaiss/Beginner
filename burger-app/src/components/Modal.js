import React, { Component } from "react";
import "./Modal.css";

class Modal extends Component {
  orderRequest() {
    let name = document.getElementById("name").value;
    let number = document.getElementById("number").value;
    let address = document.getElementById("address").value;

    if (name !== "" && number > 0 && address !== "") {
      alert(
        `${name}, your order is placed! We'll reach you at ${number} and deliver at ${address}`
      );
    } else {
      alert("Please fill all the fields!");
    }
  }

  render() {
    return (
      <div className="modal">
        <div className="modal-content">
          <span className="close" onClick={() => this.props.toggle()}>
            &times;
          </span>
          <div className="centercontent">
            <h1>Enter Delivery Details</h1>
            <br></br>
            <span className="modallabel">Your Name :</span>
            <input id="name" placeholder="Enter your name here"></input>
            <br></br>
            <span className="modallabel">Contact :</span>
            <input id="number" placeholder="Enter your number here"></input>
            <br></br>
            <span className="modallabel">Address :</span>
            <input
              id="address"
              min="1"
              placeholder="Enter your delivery address here"
            ></input>
            <br></br>
            <br></br>
            <button
              id="orderbtn"
              className="modaladdbtn"
              onClick={this.orderRequest}
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
