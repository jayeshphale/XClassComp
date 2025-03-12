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
    this.setState((prevState) => ({
      count: prevState.count > 0 ? prevState.count - 1 : 0, // Prevent negative values
    }));
  };

  render() {
    return (
      <div className="counter-container">
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.increment} className="btn increment">➕ Increment</button>
        <button className="btn decrement" onClick={handleDecrement}>  ➖ Decrease</button>
      </div>
    );
  }
}

export default Counter;
