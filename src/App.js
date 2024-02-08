import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";

const App = () => {
  //bellow is short hand
  const [count, setCount] = useState({ count: 0 });

  //long way below

  // const myState = useState(0);
  // const count = myState[0];
  // const setCount = myState[1]

  const add = () => {
    setCount(count + 1);
  };

  const minus = () => {
    setCount(count - 1);
  };

  return (
    <>
      <button onClick={add}>+</button>
      <button onClick={minus}>-</button>
      <p>Count : {count}</p>
    </>
  );
};

export default App;
