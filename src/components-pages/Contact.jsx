import React, { Component } from "react";
import { useParams } from "react-router";

const Contact = () => {
  const { country } = useParams();

  if (country === "en") {
    return <p>Please call 0207 123456</p>;
  }
  if (country === "fr") {
    return <p>Please call 01 48 23 45 67</p>;
  }
  return <div>Contact Page</div>;
};

export default Contact;
