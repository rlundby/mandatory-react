import {makeMove, newGame} from '../src/logic';

test('first move works ok', () => {
  const initial = newGame();
  const expected = { state: 'plr2', board: [0,0,1,0,0,0,0,0,0], line: [] };
  const result = makeMove(initial, 2);
  expect(result).toEqual(expected);
  expect(initial).toEqual(newGame()); // testing we didn't mutate entry state
});

test('second move works ok', () => {
    const initial = {state: 'plr2', board: [0, 0, 1, 0, 0, 0, 0, 0, 0], line: []};
    const expected = { state: 'plr1', board: [0, 0, 1, 2, 0, 0, 0, 0 ,0], line: [] };
    const result = makeMove(initial, 3);
    expect(result).toEqual(expected);
    expect(initial).toEqual({state: 'plr2', board: [0, 0, 1, 0, 0, 0, 0, 0, 0], line: []}); // testing we didn't mutate entry state
});

test('no more moves available', () => {
    const initial = {state: 'plr1', board: [1, 2, 1, 2, 2, 1, 1, 0, 2], line: []};
    const expected = { state: 'draw', board: [1, 2, 1, 2, 2, 1, 1, 1 ,2], line: [] };
    const result = makeMove(initial, 7);
    expect(result).toEqual(expected);
    expect(initial).toEqual({state: 'plr1', board: [1, 2, 1, 2, 2, 1, 1, 0, 2], line: []}); // testing we didn't mutate entry state
});

test('Its a draw - stop trying to place a tile', () => {
    const initial = { state: 'draw', board: [1, 2, 1, 2, 2, 1, 1, 1 ,2], line: [] };
    const expected = { state: 'draw', board: [1, 2, 1, 2, 2, 1, 1, 1 ,2], line: [] };
    const result = makeMove(initial, 1);
    expect(result).toEqual(expected);
    expect(initial).toEqual({ state: 'draw', board: [1, 2, 1, 2, 2, 1, 1, 1 ,2], line: [] }); // testing we didn't mutate entry state
});

test('trying to choose already taken tile', () => {
    const initial = {state: 'plr2', board: [0, 0, 1, 0, 0, 0, 0, 0, 0], line: []};
    const expected  = {state: 'plr2', board: [0, 0, 1, 0, 0, 0, 0, 0, 0], line: []};
    const result = makeMove(initial, 2);
    expect(result).toEqual(expected);
    expect(initial).toEqual({state: 'plr2', board: [0, 0, 1, 0, 0, 0, 0, 0, 0], line: []}); // testing we didn't mutate entry state
});

test('Player 1 won the game!', () => {
     const initial = {state: 'plr1', board: [0, 1, 1, 2, 2, 0, 0, 0, 0], line: []};
     const expected  = {state: 'plr1won', board: [1, 1, 1, 2, 2, 0, 0, 0, 0], line: [0,1,2]};
     const result = makeMove(initial, 0);
     expect(result).toEqual(expected);
     expect(initial).toEqual({state: 'plr1', board: [0, 1, 1, 2, 2, 0, 0, 0, 0], line: []}); // testing we didn't mutate entry state
 });

test('Player 2 won the game!', () => {
    const initial = {state: 'plr2', board: [1, 0, 2, 1, 0, 0, 2, 0, 1], line: []};
    const expected  = {state: 'plr2won', board: [1, 0, 2, 1, 2, 0, 2, 0, 1], line: [2,4,6]};
    const result = makeMove(initial, 4);
    expect(result).toEqual(expected);
    expect(initial).toEqual({state: 'plr2', board: [1, 0, 2, 1, 0, 0, 2, 0, 1], line: []}); // testing we didn't mutate entry state
});



// ...more tests to follow here! 
