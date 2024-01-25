import React, { Component } from "react";

class App extends Component {
  state = {
    todos: [
      "Clean sewing machine",
      "clean overlocker",
      "clean iron and iroing baord",
    ],
  };

  onTodoInput = (e) => {
    this.setState({ todoInput: e.target.value });
  };

  onAddClick = () => {
    const todos = [...this.state.todos];
    todos.push(this.state.todoInput);
    this.setState({ todos });
  };

  render() {
    const { todos } = this.state;

    return (
      <>
        {todos.map((todo) => {
          return <p>{todo}</p>;
        })}
      </>
    );
  }
}

export default App;
