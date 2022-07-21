import React from "react";
import "./Partner.css";
import niLOGO from "../resc/nike_logo.png";
import spLOGO from "../resc/spotify_logo.png";
const Partner = () => {
  return (
    <div className="Partner-main">
      <h5>MAIN PARTNERS</h5>
      <img src={niLOGO} alt="nike logo" id="partners-logo-nike"/>
      <img src={spLOGO} alt="spotify logo" id="partners-logo-spotify"/>
    </div>
  );
};

export default Partner;
