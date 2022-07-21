import React from "react";
import "./Card.css";
import { RiShareCircleLine } from "react-icons/ri";

const Card = ({ img, jersey }) => {
  return (
    <div className="card-container-one">
      <img src={img} alt="wallpaper" id="card-image" />
      <div class="card-text-container">
        <img src={jersey} alt="jersey" id="card-jersey" />
        <div class="card-text">
          <h4> HOME KIT 22/23</h4>
          <p> Inspired by the 30th Anniversary of Barcelona ‘92 </p>
          <h2>
            SHOP NOW <RiShareCircleLine />
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Card;
