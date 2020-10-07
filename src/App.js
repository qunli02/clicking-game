import React from "react";
import "./App.css";
import Store from "./store.js";
import Score from "./score.js";
import ClickingImage from "./clickImage.js";
import Owned from "./owned.js";

class App extends React.Component {
  state = {
    click: 1,
    score: 100,
    timeScore: 0,
    s1: 0,
    s2: 0,
    c1: 0,
    c2: 0,
  };
  handleOwned = (item) => {
    let hash = {};
    hash[item] = this.state[item] + 1;
    this.setState(hash);
  };

  handleTimed = (num) => {
    this.setState({
      timeScore: this.state.timeScore + num,
    });
  };

  handleClick = (num) => {
    this.setState({
      click: this.state.click + num,
    });
  };

  onHandleScore = (num) => {
    this.setState({
      score: this.state.score + num,
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
        <div className="left-section">
          <Score score={this.state.score} timeScore={this.state.timeScore} />
          <ClickingImage
            click={this.state.click}
            onHandleClick={(num) => this.onHandleScore(num)}
          />
        </div>
        <Owned
          s1={this.state.s1}
          s2={this.state.s2}
          c1={this.state.c1}
          c2={this.state.c2}
        />
        <Store
          buypps={(point, price, item) => {
            if (this.state.score + price >= 0) {
              this.onHandleScore(price);
              this.handleTimed(point);
              this.handleOwned(item);
            }
          }}
          buyppc={(point, price, item) => {
            if (this.state.score + price >= 0) {
              this.onHandleScore(price);
              this.handleClick(point);
              this.handleOwned(item);
            }
          }}
        />
      </div>
    );
  }
}

export default App;
