import React from "react";
import "./App.css";
import Store from "./store.js";
import Score from "./sorce.js";
import ClickingImage from "./clickImage.js";

class App extends React.Component {
  state = {
    score: 0,
  };

  onHandleClick = (e) => {
    e.preventDefault();
    this.setState({
      score: this.state.score + 1,
    });
  };
  render() {
    return (
      <div className="app">
        <Score score={this.state.score} />
        <ClickingImage onHandleClick={this.onHandleClick} />
        <Store />
      </div>
    );
  }
}

export default App;
