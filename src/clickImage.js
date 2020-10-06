import React from "react";

class ClickImage extends React.Component {
  doit = () => {
    console.log("ASDASD");
  };

  render() {
    return (
      <div className="image" onClick={this.props.onHandleClick}>
        image
      </div>
    );
  }
}

export default ClickImage;
