import React, { Component } from 'react';
import './Square.css';

class Square extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);

  }

  handleClick() {
    this.props.onClick(this.props.color.id, this.props.color.style.backgroundColor)
  }

  render() {
    return (
      <span className="square" style={this.props.color.style} onClick={this.handleClick} />
    );
  }
}

export default Square;
