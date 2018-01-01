import React, { Component } from 'react';
import './Row.css';
import Square from '../Square/Square'


class Row extends Component {

  render() {
    const squareList = this.props.rowColors.map(color => {
      return <Square color={color} onClick={this.props.onClick}/>
    });

    return (
      <div className="matrixRow">
        {squareList}
      </div>
    );
  }
}

export default Row;
