import React, { Component} from 'react';
const _ = require("underscore");


let colors = [
  'mediumpurple', 'purple', '#ffb31a', '#e6ffe6', '#4dffb8', '#00cc00', '#ffffcc', '#660033',
  'grey', '#009999', '#e0e0eb', 'green', '#ffe6ff', 'purple', '#999966', '#ffcc66',
  '#d9b3ff', '#ecffb3', '#ffb31a', '#e6ffe6', '#4dffb8', '#00cc00', '#ffffcc', '#660033',
  'grey', '#009999', '#e0e0eb', 'green', '#ffe6ff', 'purple', '#999966', '#ffcc66'
 ];


function buildGrid () {

  let totalColors =
    [].concat(_.shuffle(colors))
      .concat(_.shuffle(colors))
      .concat(_.shuffle(colors))
      .concat(_.shuffle(colors));

  const squareStyles = totalColors.map((color, index) => {
    return {style: {backgroundColor: color, border: '1px solid black', boxShadow: `1px 1px 1px black`},
            id: `square${index}`};
  });

  let squareStylesByRow = [];
  for (let i=0; i<8; i++) {
    squareStylesByRow.push(squareStyles.splice(0, 16));
  }

  return squareStylesByRow;
}

export let squareStylesByRow = buildGrid();

export const reshuffleColors = () => {
  return buildGrid();;
}
