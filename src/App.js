import React, { Component } from "react";
import Todo from "./Todo";

class App extends Component {
  state = { todos: ["Crepes", "Candied pecans"] };
  render() {
    const { todos } = this.state;
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

    //LAST OPTION worrks only if you only want to retrun one thing only
    return (
      <>
        {!todos.length && <p> All done!</p>}
        {todos.map((todo) => {
          return <Todo todo={todo} />;
        })}
      </>
    );
  }
}

export default App;

//conditional rendering ^^
