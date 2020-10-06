import React from "react";
import "./App.css";
import Store from "./store.js";
import Score from "./score.js";
import ClickingImage from "./clickImage.js";

class App extends React.Component {
  state = {
    click: 1,
    score: 0,
    timeScore: 0,
  };

  handleTimed = (num) => {
    this.setState({
      timeScore: this.state.timeScore + num,
    });
  };

  onHandleScore = (num) => {
    if (this.state.score + num > 0) {
      this.setState({
        score: this.state.score + num,
      });
    }
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({
        score: this.state.score + this.state.timeScore,
      });
    }, 1000);
  }
  render() {
    console.log(this.state);

    return (
      <div className="app">
        <Score score={this.state.score} />
        <ClickingImage
          click={this.state.click}
          onHandleClick={(num) => this.onHandleScore(num)}
        />
        <Store
          buy={(point, price) => {
            this.onHandleScore(point);
            this.handleTimed(price);
          }}
        />
      </div>
    );
  }
}

export default App;
