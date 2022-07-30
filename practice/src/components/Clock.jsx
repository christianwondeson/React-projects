import React, { Component } from "react";

function FormatTime(props) {
  return <h2>it it {props.date.toLocaleTimeString()}.</h2>;
}

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }
  
  componentDidMount() {
    this.timerID = setInterval(() => this.Tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  Tick() {
    this.setState({
      date: new Date(),
    });
  }
  render() {
    return (
      <div>
        <h1>hello world</h1>
        <FormatTime date={this.state.date} />
      </div>
    );
  }
}

export default Clock;
