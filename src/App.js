import React, { Component } from "react";

class App extends Component {
  state = { todos: ["Crepes", "Candied pecans"] };
  render() {
    // const { todos } = this.state;
    // if (!todos.length) {
    //   return <p> All done!</p>;
    // }
    // return todos.map((todo) => {
    //   return <p>{todo}</p>;
    // });
    //TERNARY BELOW

    !todos.length ? (
      <p>All done!</p>
    ) : (
      todos.map((todo) => {
        return <p>{todo}</p>;
      })
    );
  }
}

export default App;

//conditional rendering ^^
