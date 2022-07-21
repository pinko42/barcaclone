import React from "react";
import { BiPlay } from "react-icons/bi";
import tv from "../../../../resc/Barcatv.png";
import { animationFunction } from "../../../../functions";
const Center = ({ hover, id, setHover, setId }) => {
  return (
    
      <div
        className="image-style"
        id="img2"
        style={{ width: animationFunction(id, hover, "widthSecond") }}
        onMouseEnter={() => {
          setHover(true);
          setId(2);
        }}
        onMouseLeave={() => {
          setHover(false);
        }}
      >
        <div className="gradient"></div>
        <span
          style={{
            fontSize: animationFunction(id, hover, "fontSecondSpan"),
          }}
        >
          BARCA TV+
        </span>
        <h1
          className="text"
          style={{
            fontSize: animationFunction(id, hover, "fontSecondH1"),
          }}
        >
          INSIDE TOURE: Fabulous display in Florida
        </h1>
        <p
          style={{
            display: animationFunction(id, hover, "displaySecond"), width:400
          }}
        >
          Beautiful football from FC Barcelona sees them hit Inter Miami for six
          in the opening game of the US Tour
        </p>
        <div id="icon_carousel">
          {" "}
          <img src={tv} alt="" />
          <div className="time">
            <BiPlay />
            <span className="hour">10:38</span>
          </div>
        </div>
      </div>
   
  );
};

export default Center;
