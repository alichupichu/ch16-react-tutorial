import React, { Component } from "react";
import Todo from "./components/Todo";

class App extends Component {
  state = {
    todos: [
      { title: "Make crepes", done: true },
      { title: "Make suzette sauce", done: false },
      { title: "Flamber the crepes", done: false },
    ],
  };

  onToggleDone = (item) => {
    console.log(item);
    const index = this.state.todos.findIndex((todo) => {
      todo.title === item;
    });
    const todos = [...this.state.todos];
    todos[index].done = !todos[index].done;
    this.setState({ todos });
  };

  render() {
    let count = 0;
    this.state.todos.forEach((todo) => {
      if (todo.done) count++;
    });
    // if (!todos.length) {
    //   return <p> All done!</p>;
    // }
    // return todos.map((todo) => {
    //   return <p>{todo}</p>;
    // });

    //TERNARY BELOW
    // return (
    //   !todos.length ? (
    //   <p>All done!</p>
    // ) : (
    //   todos.map((todo) => {
    //     return <p>{todo}</p>;
    //   })
    // );)

    //LAST OPTION worrks only if you only want to return one thing only
    return (
      //   <>
      //     <h3> Total tasks done : {} </h3>
      //     {!todos.length && <p> All done!</p>}
      //     {todos.map((todo) => {
      //       return <Todo todo={todo.title} done={todo.done} />;
      //     })}
      //   </>
      // );
      <>
        <p>Total tasks done: {count}</p>
        {this.state.todos.map((todo) => {
          return (
            <Todo
              todo={todo.title}
              done={todo.done}
              onToggleDone={this.onToggleDone}
            />
          );
        })}
      </>
    );
  }
}

export default App;
