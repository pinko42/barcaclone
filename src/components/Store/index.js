import React from "react";
import "./style.css";
import Card from "./Card";
const Store = () => {
  return (
    <div className="store">
      <div className="store-container">
        <h1>Barça Store Spotify CN</h1>
        <div className="card-container">
          <Card
            img={
              "https://www.fcbarcelona.com/photo-resources/2022/06/27/d19cead5-80b5-4585-928e-d98fa7053251/Home-carr.jpg?width=600&height=237"
            }
            jersey={
              "https://www.fcbarcelona.com/photo-resources/2022/06/02/f4cdd600-3091-4fd3-968f-a6237822e1fc/home.png?width=300&height=436"
            }
          />
          <Card
            img={
              "https://www.fcbarcelona.com/photo-resources/2022/06/27/344d2213-35e9-4f27-a272-760c4cecdce3/Away-carr.jpg?width=600&height=237"
            }
            jersey={
              "https://www.fcbarcelona.com/photo-resources/2022/06/27/a217f994-e373-4869-8f4d-7bafdd0841b7/Away-jersey.png?width=300&height=436"
            }
          />
          <Card
            img={
              "https://www.fcbarcelona.com/photo-resources/2022/07/06/def8700d-e763-4582-8ed7-5aba44ffcc11/cover.jpg?width=600&height=237"
            }
            jersey={
              "https://www.fcbarcelona.com/photo-resources/2022/07/06/9fff37dc-2d3a-4c70-8e92-fbb682d3f544/samarreta.png?width=300&height=436"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Store;
