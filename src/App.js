import React, { Component } from "react";

class App extends Component {
  state = { count: 1 };

  onCountClick = () => {
    console.log("onClickCount started", this.state.count);
    this.setState({ count: this.state.count + 1 });
    console.log("onClickCount ended", this.state.count);
  };

  render() {
    console.log(this.state);
    const { count } = this.state;
    return <p onClick={this.onCountClick}> {count} </p>;
  }
}

export default App;
