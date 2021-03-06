import React from "react";
import staticShiba from "./shiba.png";
import shiba from "./shiba.gif";

class ClickImage extends React.PureComponent {
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
    newDiv.style.left = `${e.clientX + 10}px`;
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
      <div className="image">
        Pet the shiba dog
        {this.state.isShibaStatic ? (
          <img
            onMouseOver={this.toggleStatic}
            src={staticShiba}
            width="200"
            height="200"
            alt="shiba"
          ></img>
        ) : (
          <img
            onClick={(e) => {
              this.clickEffect(e);
            }}
            onMouseLeave={this.toggleStatic}
            src={shiba}
            width="220"
            height="220"
            alt="shiba"
          ></img>
        )}
      </div>
    );
  }
}

export default ClickImage;
