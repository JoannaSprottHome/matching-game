import React, { Component } from 'react';
import './Timer.css'
const EasyTimer = require("easytimer");

const eT = new EasyTimer();
const initialTime = eT.getTimeValues();

class Timer extends React.Component {
  state = {
    currentTimestamp: initialTime
  };

  componentDidMount() {
    eT.start();
    setInterval(() => {
      this.setState({ currentTimestamp: eT.getTimeValues()})
    }, 1000);
  }

  render() {
    if (this.props.resetStatus) {
      eT.stop();
      eT.start();
      this.props.resetAction(false);
    }

    let isFinished = this.props.isFinished;
    let toDisplay = this.state.currentTimestamp.toLocaleString();
    if (isFinished) {
      toDisplay = `Well Done!!! ${this.state.currentTimestamp.toLocaleString()}`
      eT.pause();
    }


    return (
      <div>
        <p className="timer-text mt-2">{toDisplay}</p>
      </div>
    );
  }
}

export default Timer;
