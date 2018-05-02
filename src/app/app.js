import React, {Fragment as F} from 'react';

import {makeMove, newGame} from '../logic';

import Message from './message';
import Tile from './tile';

/*
The main game App! It should have a TicTacToe game state in its component state,
and use the Tile and Message components to render the game.

Then the `makeMove` function from the logic layer should be used to update the
game state as the tiles are being clicked.

The user should also be able to reset the game.

The App component should render an outer element with a `container` CSS class,
and all tiles in an element with a `board` CSS class.
*/

export default class App extends React.Component {

    state = newGame();

    newMove = (pos) => {
        this.setState(makeMove(this.state, pos))
    };

    resetGame = e => {
        this.setState(newGame());
    };

  render(){
    return (
        <F>
            <div>Tic Tac Toe - Fun right?</div>
            <div className='board'>
                {this.state.board.map((tile, i) => {
                    const winningLine = this.state.line.includes(i);

                    return  <Tile key={i} position={i} winningLine={winningLine} board={this.state} piece={tile} click={this.newMove}/>
                })}
            </div>
            <Message board={this.state}/>
            <button onClick={this.resetGame}> Reset game </button>
        </F>
    );
  }
}
