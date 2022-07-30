import React, { Component } from "react";

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 0,
      num1: 3,
      num2: 5,
      render: false,
    };

    this.handleAdd = this.handleAdd.bind(this);
    this.handleSubtract = this.handleSubtract.bind(this);
  }

  handleAdd() {
    this.setState((sum) => ({
      result: sum.num1 + sum.num2,
      render: true,
    }));
  }

  handleSubtract() {
    this.setState((sub) => ({
      result: sub.num1 - sub.num2,
      render: true,
    }));
  }

  render() {
    return (
      <div>
        <h2>Calculators</h2>
        <h4>
          the numbers inputed : {this.state.num1} and {this.state.num2}
        </h4>
        <button onClick={this.handleAdd}>Add</button>
        <br />
        <br />
        <button onClick={this.handleSubtract}>subtract</button>
        <br />
        <h2>There sum : {this.state.render ? this.state.result : "none"}</h2>
      </div>
    );
  }

}

export default Calculator;
