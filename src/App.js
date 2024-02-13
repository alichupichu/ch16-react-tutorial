import React, { Component } from "react";
import Home from "./components-pages/Home";
import About from "./components-pages/About";
import Contact from "./components-pages/Contact";
import { Routes, Route } from "react-router-dom";
import Error from "./components-pages/Error";
import Nav from "./components-pages/Nav";
import Character from "./components-pages/Character";

const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<About />} />
        <Route path="/" element={<Contact />} />
        <Route path="*" element={<Error />} />
        <Route path="/:character" element={<Character />} />
      </Routes>
    </>
  );
};

export default App;
