import React from "react";

class ClickImage extends React.Component {
  render() {
    return (
      <div
        className="image"
        onClick={() => this.props.onHandleClick(this.props.click)}
      >
        image
      </div>
    );
  }
}

export default ClickImage;
