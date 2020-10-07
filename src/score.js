import React from "react";

function Score(props) {
  return (
    <div>
      <h1>
        Score <br />
        {props.score}
      </h1>
      <p>{props.timeScore} points per-seond</p>
    </div>
  );
}

export default Score;
