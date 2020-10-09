import React from "react";

function Store(props) {
  return (
    <div className="store">
      <div>
        points/s Store
        <br />
        <button
          className="store-button tooltip"
          onClick={() => props.buypps(1, -100, "s1")}
        >
          1 pointer thing cost 100
          <span className="tooltiptext">1 point per second cost 100</span>
        </button>
        <button
          className="store-button tooltip"
          onClick={() => props.buypps(10, -1000, "s2")}
        >
          10 pointer thing cost 1000
          <span className="tooltiptext">10 points per second cost 1000</span>
        </button>
      </div>
      <div>
        clicker store
        <br />
        <button
          className="store-button tooltip"
          onClick={() => props.buyppc(1, -10, "c1")}
        >
          1 extra point pre click cost 10
          <span className="tooltiptext">1 extra point pre click cost 10</span>
        </button>
        <button
          className="store-button tooltip"
          onClick={() => props.buyppc(10, -100, "c2")}
        >
          10 extra point pre click cost 100
          <span className="tooltiptext">10 extra point pre click cost 100</span>
        </button>
      </div>
    </div>
  );
}

export default Store;
