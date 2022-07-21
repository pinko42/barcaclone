export const style = (query, id) => {
  const active = {
    [true && 1]: "activeOne",
    [true && 2]: "activeTwo",
    [true && 3]: "activeThree",
  };
  return active[(query, id)];
};
export const animationFunction = (id, hover, query) => {
  const selector = {
    widthFirst: style(hover, id) === "activeOne" ? "60%" : "20%",
    widthSecond: style(hover, id) === "activeTwo" ?  "60%" : "20%",
    widthThird: style(hover, id) === "activeThree" ?  "60%" : "20%",

    fontFirstH1: style(hover, id) === "activeOne" ? "2.2rem" : "1rem",
    fontSecondH1: style(hover, id) === "activeTwo" ? "2.2rem" : "1rem",
    fontThirdH1: style(hover, id) === "activeThree" ? "2.2rem" : "1rem",

    fontSecondSpan: style(hover, id) === "activeTwo" ? "2.5rem" : "1.2rem",
    fontThirdSpan: style(hover, id) === "activeThree" ? "2.5rem" : "1.2rem",

    displayFirst: style(hover, id) === "activeOne" ? "flex" : "none",
    displaySecond: style(hover, id) === "activeTwo" ? "flex" : "none",
    displayThird: style(hover, id) === "activeThree" ? "flex" : "none",
  };
  return selector[(id, hover, query)] ?? "error";
};
