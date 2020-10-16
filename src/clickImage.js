import React from "react";
import staticShiba from "./shiba.png";
import shiba from "./shiba.gif";

class ClickImage extends React.Component {
  state = {
    isShibaStatic: true,
  };

  toggleStatic = () => {
    this.setState({
      isShibaStatic: !this.state.isShibaStatic,
    });
  };

  clickEffect = (e) => {
    this.props.onHandleClick(this.props.click);
    const newDiv = document.createElement("div");
    newDiv.className = "point-indicator";
    newDiv.style.top = `${e.clientY}px`;
    newDiv.style.left = `${e.clientX}px`;
    newDiv.innerText = `+${this.props.click} points`;
    const app = document.querySelector(".image");
    app.appendChild(newDiv);
    setTimeout(function () {
      newDiv.className += " move-up";
    }, 50);
    setTimeout(function () {
      newDiv.remove();
    }, 1000);
  };

  render() {
    return (
      <div
        className="image"
        onClick={(e) => {
          this.clickEffect(e);
        }}
      >
        Pet the dog
        <img
          onMouseOver={this.toggleStatic}
          onMouseLeave={this.toggleStatic}
          src={this.state.isShibaStatic ? staticShiba : shiba}
          width="200"
          height="200"
          alt="shiba"
        ></img>
      </div>
    );
  }
}

export default ClickImage;
