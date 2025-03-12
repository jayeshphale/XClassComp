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
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.increment} className="btn increment">
          ➕ Increment
        </button>
        <button
          onClick={this.decrement}
          className="btn decrement"
          disabled={this.state.count === 0}
        >
          ➖ Decrement
        </button>
      </div>
    );
  }
}

export default Counter;
