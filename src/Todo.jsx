import React, { Component } from "react";

class Todo extends Component {
  state = { done: false };
  render() {
    const { done } = this.state;
    return (
      <>
        <p>{this.props.todo}</p>
        <button
          onClick={() => {
            this.setState({ done: !this.state.done });
          }}
        >
          Done
        </button>
      </>
    );
  }
}

export default Todo;
