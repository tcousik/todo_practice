import React from "react";
import ReactDOM from "react-dom";
import Form from "./form";
import Todo from "./todo";

export default class TodoList extends React.Component {
  state = {
    todos: [],
  };

  addTodo = (todo) => {
    this.setState({
      todos: [todo, ...this.state.todos],
    });
  };

  toggleComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            complete: !todo.complete,
          };
        } else {
          return todo;
        }
      }),
    });
  };

  render() {
    return (
      <div>
        <Form addTodo={this.addTodo} />
        {this.state.todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            toggleComplete={() => this.toggleComplete(todo.id)}
          />
        ))}
      </div>
    );
  }
}

ReactDOM.render(<TodoList />, document.getElementById("root"));
