/*
The Tile component expects to be passed
- piece: a valid board value:
  - 0: an empty square
  - 1: plr1 has a piece here
  - 2: plr2 has a piece here
- callback: a function that it'll call when clicked
- line: a boolean, true if tile was part of winning line (STRETCH TASK)

The tile should render with the classes...
- tile: always
- plr1: if has a plr1 piece
- plr2: if has a plr2 piece
- line: if it was part of a winning line (STRETCH TASK)
*/

import React from 'react';

export default function Tile(props){

  const currentPosition = props.position;
  const currentTile = props.piece;

  let winningTile;

  if (props.winningLine)  {
      winningTile = 'line';
  } else {
      winningTile = '';
  }

  const clickHandler = (e) => {
    props.click(currentPosition);
  };
  switch(currentTile) {
      case 0:
          return(
              <div className={`tile`} onClick={clickHandler}>

              </div>
          );
      case 1:
          return(
              <div className={`plr1 tile ${winningTile}`}>
                X
              </div>
          );
      case 2:
          return(
              <div className={`plr2 tile ${winningTile}`}>
                  O
              </div>
          );
      default: return(
          <div> This shouldn't happen :(</div>
      )
  }
}
