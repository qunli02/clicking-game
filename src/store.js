import React from "react";
import hand from "./hand.png";
import person from "./person.png";

function Store(props) {
  return (
    <div className="store">
      <div>
        points/s Store
        <div className="flex">
          <button
            className="store-button tooltip flex"
            onClick={() => props.buypps(1, -100, "s1")}
          >
            <img src={hand} width="50" height="50" alt="hand"></img>
            <span className="tooltiptext button-inside">
              1 pointer thing cost 100
            </span>
            <div className="button-inside">
              <h1 className="zm">petting Hand</h1>
              <p>Cost :100 pets</p>
            </div>
            <h1 className="button-inside">{props.s1}</h1>
          </button>
        </div>
        <button
          className="store-button tooltip flex"
          onClick={() => props.buypps(10, -1000, "s2")}
        >
          <img src={person} width="50" height="50" alt="person"></img>
          <span className="tooltiptext button-inside">
            10 points per second cost 1000
          </span>
          <div className="button-inside">
            <h1 className="zm">helping person</h1>
            <p>Cost :1000 pets</p>
          </div>
          <h1 className="button-inside">{props.s2}</h1>
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
        <br />
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
