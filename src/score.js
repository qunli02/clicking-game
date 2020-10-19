import React from "react";

function Score(props) {
  return (
    <div className="score">
      <h1 className="center">
        Score <br />
        {Math.floor(props.score)}
      </h1>
      <p className="center">{props.click} points per click</p>
      <p className="center">{props.timeScore} points per-seond</p>
    </div>
  );
}

export default Score;
