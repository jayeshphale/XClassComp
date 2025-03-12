import React, { Component } from "react";
import "./Counter.css";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  decrement = () => {
    this.setState((prevState) => ({ count: prevState.count - 1 }));
  };

  render() {
    return (
      <div className="counter-container">
        <h1 className="counter-display">Count: {this.state.count}</h1>
        <button className="btn increment" onClick={this.increment}>
          ➕ Increment
        </button>
        <button
          className="btn decrement"
          onClick={this.decrement}
          disabled={this.state.count === 0}
        >
          ➖ Decrement
        </button>
      </div>
    );
  }
}

export default Counter;
