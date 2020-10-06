import React from "react";
import "./App.css";
import Store from "./store.js";
import Score from "./score.js";
import ClickingImage from "./clickImage.js";

class App extends React.Component {
  state = {
    score: 0,
    timeScore: 0,
  };

  onHandleClick = (e) => {
    this.setState({
      score: this.state.score + 1,
    });
  };
  componentDidMount() {
    setInterval(() => {
      this.setState({
        score: this.state.score + this.state.timeScore,
      });
    }, 1000);
  }
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
