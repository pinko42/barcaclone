import React from "react";
import { BiTimeFive } from "react-icons/bi";
import { animationFunction } from "../../../../functions";
const Left = ({ hover, id, setHover, setId }) => {
  return (
    <div
      className="image-style"
      id="img1"
      style={{
        width: animationFunction(id, hover, "widthFirst"),
      }}
      onMouseEnter={() => {
        setHover(true);
        setId(1);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
    >
      <div className="gradient"></div>
      <h1
        className="text"
        style={{
          fontSize: animationFunction(id, hover, "fontFirstH1"),
        }}
      >
        Lewandowski presentation, live on Barça Tv+
      </h1>
      <p
        style={{
          display: animationFunction(id, hover, "displayFirst"),
          width: 400,
        }}
      >
        From 6.00pm CEST, live coverage from Maimi as the Polish striker is
        introduced as a new FC Barcelona player{" "}
      </p>
      <div id="icon_carousel">
        {""}
        <div className="icon">FIRST TEAM</div>
        <div className="time">
          <BiTimeFive />
          <span className="hour">1h ago</span>
        </div>
      </div>
    </div>
  );
};

export default Left;
