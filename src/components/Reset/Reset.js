import React, { Component}  from 'react';
import './Reset.css'
import { Button } from 'reactstrap';

class Reset extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onClick(false);
  }

  render() {
    return(
      <div className="clearfix reset-outer-div">
        <Button
        className="btn float-right mb-3 reset-button"
        onClick={this.handleClick}>
          New Game</Button>
      </div>
    )
  }
}

export default Reset;
