import React from "react";
import "./Carrousel.css";

const Carrousel = () => {
  return (
    <div className="container">
      <div className="image-style" id="img1">
        <div id="gradient">
          <h1 className="text">Hello World</h1>
          <p>
            The team presided by David Beckham is the first opponent of the US
            Tour in a game at the DRV PNK Stadium, Fort Lauderdale
          </p>
          <div id="icon_carousel">icons</div>
        </div>
      </div>
      <div className="image-style" id="img2">
        <h1 className="text">Hello World</h1>
        <p>
          The team presided by David Beckham is the first opponent of the US
          Tour in a game at the DRV PNK Stadium, Fort Lauderdale
        </p>
        <div id="icon_carousel">icons</div>
        <div id="gradient">d</div>
      </div>
      <div className="image-style" id="img3">
        <h1 className="text">Hello World</h1>
        <p>
          The team presided by David Beckham is the first opponent of the US
          Tour in a game at the DRV PNK Stadium, Fort Lauderdale
        </p>
        <div id="icon_carousel">icons</div>
        <div id="gradient">d</div>
      </div>
    </div>
  );
};

export default Carrousel;
