import React, { useState } from "react";
import "./style.css";
import Left from "./Box/Left";
import Center from "./Box/Center";
import Right from "./Box/Right";
const Carousel = () => {
  const [hover, setHover] = useState(true);
  const [id, setId] = useState(1);
  return (
    <div className="container">
      <Left hover={hover} id={id} setHover={setHover} setId={setId} />
      <Center hover={hover} id={id} setHover={setHover} setId={setId} />
      <Right hover={hover} id={id} setHover={setHover} setId={setId} />
    </div>
  );
};

export default Carousel;
