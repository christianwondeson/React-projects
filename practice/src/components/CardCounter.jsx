import React, { Component } from "react";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };

    this.handleIncrement = this.handleIncrement.bind(this);
  }

  handleIncrement() {
    this.setState((count) => ({
        counter: count.counter + 1,
      }));
  }

  render() {
    return (
      <div>
        <h2>{this.state.counter}</h2>
        <button onClick={this.handleIncrement}>Increment</button>
      </div>
    );
  }
}

export default Card;
