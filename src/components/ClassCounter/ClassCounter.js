import React, { Component } from "react";

class ClassCounter extends Component {
  state = {
    count: 0,
  };

  addOneHandler = () => {
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  };
  addTwoHandler = () => {
    this.setState((prevState) => {
      return { count: prevState.count + 2 };
    });
  };
  addFiveHandler = () => {
    for (let i = 0; i < 5; i++) {
      this.setState((prevState) => {
        return { count: prevState.count + 5 };
      });
    }
  };

  render() {
    return (
      <div>
        <h2>count - <span>{this.state.count}</span></h2>
        <button onClick={this.addOneHandler}>add One</button>
        <button onClick={this.addTwoHandler}>add Two</button>
        <button onClick={this.addFiveHandler}>add Five</button>
      </div>
    );
  }
}

export default ClassCounter;
