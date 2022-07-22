import React, { useEffect, useState } from "react";
import "./style.css";
import Card from "./Card";

const Match = () => {
  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    const difference = +new Date(`${year}-10-1`) - +new Date();
    let timeLeft = {};
    timeLeft = {
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span>
        {timeLeft[interval]} {" : "}
      </span>
    );
  });

  return (
    <div className="match">
      <div className="match-container">
        <div className="match-header">
          <h1 className="match-header-text">
            Barça First Team <b>Matches</b>
          </h1>
          <span className="match-header-time">
            NEXT MATCH{" "}
            <h3>
              {timeLeft.hours} : {timeLeft.minutes} : {timeLeft.seconds}
            </h3>
          </span>
          <h2 className="match-header-calendar">
            Sync Schedules to Calendar <button>{"<"}</button>{" "}
            <button>{">"}</button>
          </h2>
        </div>
        <div className="match-card-all">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Match;
