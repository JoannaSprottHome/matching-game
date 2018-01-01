import React, { Component } from 'react';
import './App.css';
import Grid from '../Grid/Grid';
import Timer from '../Timer/Timer';
import {squareStylesByRow, reshuffleColors} from '../../util/ColorGenerator.js';
import Reset from '../Reset/Reset';


let count = 0;

const styles = {
  border: `1px solid black`,
  borderHighlight: `3px solid red`,
  borderRemove: `1px solid white`,
  boxShadow: `1px 1px 1px black`,
  boxShadowHiglight: `1px 1px 10px red`,
  boxShadowRemove: `0px 0px 0px white`
}

const setStyles = (backgroundColor, border, boxShadow) => {
  return {backgroundColor: backgroundColor,
          border: border,
          boxShadow: boxShadow}
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {gridColors: squareStylesByRow,
                  resetStatus: false,
                  intermediate: {id: ``, backgroundColor: ``},
                  isFinished: false
                };
    this.resetGame = this.resetGame.bind(this);
    this.switchTimeStatusBack = this.switchTimeStatusBack.bind(this);
    this.clickSquare = this.clickSquare.bind(this);
  }

  resetGame() {
    this.setState({gridColors: reshuffleColors(), resetStatus: true, isFinished: false});
    count = 0;
  }

  switchTimeStatusBack(status) {
    this.setState({resetStatus: false});
  }

  clickSquare(id, backgroundColor) {

    const updatedColors = this.state.gridColors.map(rows => {

      return rows.map(square => {
        if (square.id === id) {
          if (this.state.intermediate.id === id) {
            square.style = setStyles(square.style.backgroundColor, styles.border, styles.boxShadow);
            this.setState({intermediate: {id: '', backgroundColor: ``}});
          } else if (this.state.intermediate.id === '' && square.style.backgroundColor !== `white`) {
            square.style = setStyles(square.style.backgroundColor, styles.borderHighlight, styles.boxShadowHiglight);
            this.setState({intermediate: {id: id, backgroundColor: backgroundColor}});
          } else {
            if (this.state.intermediate.backgroundColor === backgroundColor) {
              square.style = setStyles(`white`, styles.borderRemove, styles.boxShadowRemove)
              const setOriginal = this.state.gridColors.map(rows => {
                return rows.map(square => {
                  if (square.id === this.state.intermediate.id) {
                    square.style = setStyles(`white`, styles.borderRemove, styles.boxShadowRemove)
                  }
                });
              });
              this.setState({gridColors: setOriginal});
              this.setState({intermediate: {id: '', backgroundColor: ``}});
              count++;

              if (count === 64) {
                this.setState({isFinished: true});
              }
            }
          }
        }
        return square;
      });
    });
    this.setState({gridColors: updatedColors});
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Matching Game</h1>
        </header>
        <Timer resetStatus={this.state.resetStatus} resetAction={this.switchTimeStatusBack} isFinished={this.state.isFinished}/>
        <Reset onClick={this.resetGame} />
        <Grid gridColors={this.state.gridColors} changeColor={this.handleColors} clickSquare={this.clickSquare}/>
      </div>
    );
  }
}

export default App;
