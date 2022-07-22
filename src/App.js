import React from "react";
import Navbar from "./components/Navbar";

//there is two version of the Carousel. use one of them by commentnting one and uncommenting the other. first with javascript and second pure CSS.
import Carousel from "./components/Carousel/index.js"; 
//import Carousel from "./components/Carousel";


import Partner from "./components/Partner";
import Store from "./components/Store";
import Match from "./components/Match";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Carousel />
      <Partner />
      <Store />
      <Match/>
    </div>
  );
}

export default App;
