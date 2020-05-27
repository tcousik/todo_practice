import React from "react";
import ReactDOM from "react-dom";
import Form from "./form";

export default class TodoList extends React.Component {
  state = {
    todos: [],
  };

  addTodo = (todo) => {
    this.setState({
      todos: [todo, ...this.state.todos],
    });
  };

  render() {
    return (
      <div>
        <Form addTodo={this.addTodo} />
        {this.state.todos.map((todo) => (
          <div id={todo.id}>
            <h2>{todo.text}</h2>
          </div>
        ))}
      </div>
    );
  }
}

ReactDOM.render(<TodoList />, document.getElementById("root"));
