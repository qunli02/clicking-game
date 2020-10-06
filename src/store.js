import React from "react";

function Store(props) {
  return (
    <div>
      Store
      <div onClick={() => props.buy(1, -100)}>1 pointer thing cost 100</div>
      <div onClick={() => props.buy(10, -1000)}>10 pointer thing cost 1000</div>
    </div>
  );
}

export default Store;
