import React, { Component } from "react";
class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "Cocnut",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.input = React.createRef();
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === "text" ? target.text : target.value;
    const name = target.name;

    console.log(name, target, value);

    this.setState({
      [name]: value,
    });
  }
  handleSubmit(event) {
    alert("you choose : " + this.state.value + " " + this.input.current.value);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="inputField">
            <label htmlFor="name">name :</label>
            <input type="text" placeholder="name" ref={this.input} />
          </div>
          <div className="inputField">
            <label htmlFor="email">email :</label>
            <input type="email" placeholder="email" />
          </div>
          <div className="inputField">
            <label htmlFor="name">password :</label>
            <input type="password" placeholder="password" />
          </div>
          <div className="dropdown">
            <label htmlFor="">
              pick flavor :
              <select
                value={this.state.value}
                onChange={this.handleChange}
                name="value"
              >
                <option value="grapefruit">grapefruit</option>
                <option value="Lime">Lime</option>
                <option value="Cocnut">Cocunt</option>
                <option value="Mango">Mango</option>
              </select>
            </label>
          </div>
          <button type="Submit" name="submit" onSubmit={this.handleSubmit}>
            pick
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
