import React, { Component } from "react";
import { useParams } from "react-router";
//import { simpson } from "../simpsons.json";

const Character = () => {
  const { name } = useParams();

  const character = simpsons.find((character) => {
    character.character === character;
  });
  return <></>;
};

export default Character;
