import React, { Component } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Button from "./components/button";
import News from "./components/news";

class App extends Component {
  //state = {  }
  render() {
    return (
      <div>
        <Header />
        <Main />
        <News news="Great news everyone!" />
        <News news="Oh no! Niffler!" />
        <Button text={"Button 1"} class="important" />
        <Button text={"Button 2"} class="danger" />
        <Button text={"Button 3"} class="allClear" />
        <Footer />
      </div>
    );
  }
}

export default App;
