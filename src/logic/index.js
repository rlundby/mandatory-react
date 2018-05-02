// ---------- A tictactoe gaming library! ------------

/*
A game is an object with...
- state: a string describing the current state:
  - 'plr1': It is player 1's turn to play
  - 'plr2': It is player 2's turn to play
  - 'plr1won': Game over, the first player won
  - 'plr2won': Game over, the second player won
  - 'draw': Game over, nobody won
- board: An array of 9 numbers, each of which are either:
  - 0: An empty square
  - 1: Player 1 has a marker here
  - 2: Player 2 has a marker here
- line: an array of all positions involved in the win, otherwise empty array (STRETCH TASK)

The board array goes from top left to bottom right. For example, the array
[0,1,2,1,2,0,1,0,2] represents this board:

  .---.---.---.
  |   | 1 | 2 |
  |---+---+---|
  | 1 | 2 |   |
  |---+---+---|
  | 1 |   | 2 |
  '---'---'---'
*/

/*
The newGame function will return a valid new game object.
*/
export const newGame = () => ({
  state: 'plr1',
  board: [0,0,0,0,0,0,0,0,0],
  line: []
});

/*
The makeMove function should be called with...
- game: A valid game object
- pos: A number 0-8 corresponding to where we want to play

It will return a new game object. If the move was invalid
(because the position was already taken or the game is over),
an unchanged game will be returned.
*/
const winPatterns = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];

const hasWon = (gameBoard) => {
    for (let i = 0; i < winPatterns.length; i++) {
        const [a, b, c] = winPatterns[i];


        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            return winPatterns[i]
        }
    }
    return false
};

export const makeMove = (game, pos) => {
  // ...to be implemented!
    //Current player
    let playerNumber;

    let gameBoard = {
        state: game.state,
        board: [...game.board],
        line: [...game.line]
    };

    let currentGameState = game.state;

    switch(currentGameState) {
        case 'plr1won':
            return gameBoard;
        case 'plr2won':
            return gameBoard;
        case 'draw':
            return gameBoard;
        case 'plr1':
            playerNumber = 1;
            break;
        case 'plr2':
            playerNumber = 2;
            break;
        case 'default':
            return gameBoard;
    }

    // //  Did someone already win?
    // if(game.state === 'plr1won' ) {
    //     return gameBoard;
    // } else if  (game.state === 'plr2won') {
    //     return gameBoard;
    // }
    //
    // // Check which player is currently playing
    // if (game.state === 'plr1') {
    //     playerNumber = 1;
    //
    // } else if (game.state === 'plr2') {
    //     playerNumber = 2;
    // }
    //
    // // Is there currently a draw?
    // if (game.state === 'draw') {
    //     return game;
    // }

    // Check if it's an allowed placement
    if (gameBoard.board[pos] !== 0) {
        // Hey, someone already picked that spot!
        return game;
    }
    // Place the symbol
    gameBoard.board[pos] = playerNumber;


    // Did someone win?
    if(hasWon(gameBoard.board)) {
        gameBoard.state += 'won';
        gameBoard.line = hasWon(gameBoard.board);
    }

    // Is there a draw?
     else if (!gameBoard.board.includes(0)) {
        gameBoard.state = 'draw';
    }

    // Nope, switch to the next player!
    else {
        if (playerNumber === 1) {
            gameBoard.state = 'plr2';
        } else {
            gameBoard.state = 'plr1';
        }
    }

    return gameBoard;
};



