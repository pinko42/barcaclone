import React from "react";
import "./Carousel.css";
import { IoTimeOutline } from "react-icons/io5";

const Carousel = () => {
  return (
    <div className="container">
      <div className="image-style" id="img1">
        <div id="gradient">
        <h1 className="barcatv">BARCA TV+</h1>
          <h1 className="text">Lewandowski presentation, live on Barça Live</h1>
          <p>
            The team presided by David Beckham is the first opponent of the US
            Tour in a game at the DRV PNK Stadium, Fort Lauderdale
          </p>
          <div id="icon-carousel"><h1>FIRST TEAM</h1> <IoTimeOutline/> 4 hrs ago</div>
        </div>
      </div>
      <div className="image-style" id="img2">
        <div id="gradient">
        <h1 className="barcatv">BARCA TV+</h1>
          <h1 className="text">Lewandowski presentation, live on Barça Live</h1>
          <p>
            The team presided by David Beckham is the first opponent of the US
            Tour in a game at the DRV PNK Stadium, Fort Lauderdale
          </p>
          <div id="icon-carousel"><h1>FIRST TEAM</h1> <IoTimeOutline/> 4 hrs ago</div>
        </div>
      </div>
      <div className="image-style" id="img3">
        <div id="gradient">
        <h1 className="barcatv">BARCA TV+</h1>
          <h1 className="text">Lewandowski presentation, live on Barça Live</h1>
          <p>
            The team presided by David Beckham is the first opponent of the US
            Tour in a game at the DRV PNK Stadium, Fort Lauderdale
          </p>
          <div id="icon-carousel"><h1>FIRST TEAM</h1> <IoTimeOutline/> 4 hrs ago</div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
