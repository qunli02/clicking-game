import React from "react";
import hand from "./hand.png";
import person from "./person.png";

let increaseCost = (price, type) => {
  return Math.floor(price * 1.1 ** type);
};

let hi = "hi";
function Store(props) {
  return (
    <div className="store">
      <div>
        points/s Store
        <div className="flex">
          <button
            className="store-button tooltip flex"
            onClick={() => props.buypps(1, increaseCost(-100, props.s1), "s1")}
          >
            <img
              className="button-inside"
              src={hand}
              width="50"
              height="50"
              alt="hand"
            ></img>
            <span className="tooltiptext button-inside">
              Petting Hand: it will help you automatically pet your shiba once
              per second.
            </span>
            <div className="button-inside">
              <h1 className="zm">petting Hand</h1>
              <p>Cost :{increaseCost(100, props.s1)} pets</p>
            </div>
            <h1 className="button-inside">{props.s1}</h1>
          </button>
        </div>
        <div className="flex">
          <button
            className="store-button tooltip flex"
            onClick={() =>
              props.buypps(10, increaseCost(-1000, props.s2), "s2")
            }
          >
            <img
              className="button-inside"
              src={person}
              width="50"
              height="50"
              alt="person"
            ></img>
            <span className="tooltiptext button-inside">
              Friend: This is a new dog lover friend and will come over to pet
              your dog 10 times per second.
            </span>
            <div className="button-inside">
              <h1 className="zm">person</h1>
              <p>Cost :{increaseCost(1000, props.s2)} pets</p>
            </div>
            <h1 className="button-inside">{props.s2}</h1>
          </button>
        </div>
      </div>
      <div>
        clicker store
        <br />
        <button
          className="store-button tooltip"
          onClick={() => props.buyppc(1, increaseCost(-10, props.c1), "c1")}
        >
          1 extra point pre click cost {increaseCost(10, props.c1)}
          <span className="tooltiptext">
            1 extra point pre click cost {increaseCost(10, props.c1)}
          </span>
        </button>
        <br />
        <button
          className="store-button tooltip"
          onClick={() => props.buyppc(10, increaseCost(-100, props.c2), "c2")}
        >
          10 extra point pre click cost {increaseCost(100, props.c2)}
          <span className="tooltiptext">
            10 extra point pre click cost {increaseCost(100, props.c2)}
          </span>
        </button>
      </div>
    </div>
  );
}

export default Store;
