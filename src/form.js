import React from "react";
import shortid from "shortid";

export default class Form extends React.Component {
  state = {
    text: "",
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addTodo({
      text: this.state.text,
      id: shortid.generate(),
      complete: false,
    });
    this.setState({
      text: "",
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="text"
          value={this.state.text}
          onChange={this.handleChange}
          required
        ></input>
        <input type="submit"></input>
      </form>
    );
  }
}
