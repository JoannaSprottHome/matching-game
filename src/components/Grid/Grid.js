import React, { Component } from 'react';
import './Grid.css';
import Row from '../Row/Row'


class Grid extends Component {

  render() {
    const rowList = this.props.gridColors.map(rowColors => {
      return <Row rowColors={rowColors} onClick={this.props.clickSquare} />
    });

    return (
      <div className="grid">
        {rowList}
      </div>
    );
  }
}

export default Grid;
