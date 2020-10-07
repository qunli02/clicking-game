import React from "react";

const Owned = (props) => {
  return (
    <div>
      <h1>Owned</h1>

      <p>1 point per click x{props.c1}</p>
      <p>10 point per click x{props.c2}</p>
      <p>1 point per sec x{props.s1}</p>
      <p>10 point per sec x{props.s2}</p>
    </div>
  );
};

export default Owned;
