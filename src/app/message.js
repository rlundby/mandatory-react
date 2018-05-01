/*
The Message component expects to be passed...
- state: a game state string (plr1,plr2,plr1won,plr2won,draw)

The component will then render an appropriate message.
*/

import React from 'react';

export default function Message(props){
  const currentGameState = props.value.state;

  switch(currentGameState) {
      case 'plr1':
        return (
            <div> Player One's turn </div>
        );
      case 'plr2':
          return (
              <div> Player Two's turn </div>
          );
      case 'plr1won':
          return (
              <div> Player One has won the game </div>
          );
      case 'plr2won':
          return (
              <div> Player Two has won the game </div>
          );
      case 'draw':
          return (
              <div> It's a draw! Restart the game to play again. </div>
          );
      default:
          return (
              <div> If you can see this - call 911 pls. </div>
          );
    }
}
