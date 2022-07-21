import React from "react";
import { BiPlay } from "react-icons/bi";
import tv from "../../../../resc/Barcatv.png";
import { animationFunction } from "../../../../functions";
const Right = ({ hover, id, setHover, setId }) => {
  return (
    <div
      className="image-style"
      id="img3"
      style={{ width: animationFunction(id, hover, "widthThird") }}
      onMouseEnter={() => {
        setHover(true);
        setId(3);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
    >
      <div className="gradient"></div>
      <span
        style={{
          fontSize: animationFunction(id, hover, "fontThirdSpan"),
        }}
      >
        BARCA TV+
      </span>
      <h1
        className="text"
        style={{
          fontSize: animationFunction(id, hover, "fontThirdH1"),
        }}
      >
        HIGHLIGHTS | Inter Miami - Barça 
      </h1>
      <p
        style={{
          display: animationFunction(id, hover, "displayThird"), width:400
        }}
      >
        Enjoy the bite-sized highlights of Barça's first US Tour preseason game
        against Inter Miami in Fort Lauderdale
      </p>
      <div id="icon_carousel">
          {" "}
          <img src={tv} alt="" />
          <div className="time">
            <BiPlay />
            <span className="hour">02:49</span>
          </div>
      </div>
    </div>
  );
};

export default Right;
