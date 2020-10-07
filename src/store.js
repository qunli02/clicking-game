import React from "react";

function Store(props) {
  return (
    <div className="store">
      <div>
        points/s Store
        <button
          className="store-button"
          onClick={() => props.buypps(1, -100, "s1")}
        >
          1 pointer thing cost 100
        </button>
        <button
          className="store-button"
          onClick={() => props.buypps(10, -1000, "s2")}
        >
          10 pointer thing cost 1000
        </button>
      </div>
      <div>
        clicker store
        <button
          className="store-button"
          onClick={() => props.buyppc(1, -10, "c1")}
        >
          1 extra point pre click cost 10
        </button>
        <button
          className="store-button"
          onClick={() => props.buyppc(10, -100, "c2")}
        >
          10 extra point pre click cost 100
        </button>
      </div>
    </div>
  );
}

export default Store;
