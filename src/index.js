import React from "react";
import ReactDOM from "react-dom";
import Form from "./form";
import Todo from "./todo";
import "./index.css";

export default class TodoList extends React.Component {
  state = {
    todos: [],
    filter: "All",
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

  updateFilter = (string) => {
    this.setState({
      filter: string,
    });
  };

  deleteTodo = (id) => {
    this.setState({
      todos: this.state.todos.filter((todo) => todo.id !== id),
    });
  };

  deleteAllComplete = () => {
    this.setState({
      todos: this.state.todos.filter((todo) => !todo.complete),
    });
  };

  render() {
    let todos = [];

    if (this.state.filter === "All") {
      todos = this.state.todos;
    } else if (this.state.filter === "Active") {
      todos = this.state.todos.filter((todo) => !todo.complete);
    } else if (this.state.filter === "Complete") {
      todos = this.state.todos.filter((todo) => todo.complete);
    } else {
      return null;
    }

    return (
      <div className="App">
        <Form addTodo={this.addTodo} />
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            toggleComplete={() => this.toggleComplete(todo.id)}
            deleteTodo={() => this.deleteTodo(todo.id)}
          />
        ))}
        <div>
          Remaining Todos:{" "}
          {this.state.todos.some((todo) => !todo.complete).length}
        </div>
        <div>
          <button onClick={() => this.updateFilter("All")}>All</button>
          <button onClick={() => this.updateFilter("Active")}>Active</button>
          <button onClick={() => this.updateFilter("Complete")}>
            Complete
          </button>
        </div>
        {this.state.todos.filter((todo) => todo.complete).length ? (
          <div>
            <button onClick={this.deleteAllComplete}>
              Delete Completed Todos
            </button>
          </div>
        ) : null}
      </div>
    );
  }
}

ReactDOM.render(<TodoList />, document.getElementById("root"));
