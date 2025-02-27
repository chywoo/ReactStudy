import { useState } from 'react'
import './App.css'
import Cell from './Cell';


function Game() {
  const [data, setData] = useState(Array(9).fill(null));
  const [isO, setO] = useState(true);

  function onPlay(index) {
    const newData = data.slice();
    newData[index] = isO ? 'O' : 'X';
    setData(newData);
    setO(!isO);
  }

  return (
    <>
      <Board data={data} isO={isO} onPlay={onPlay} />
    </>
  )
}


function Board({ data, isO, onPlay }) {

  function handleClick(i) {
    if (judgeWinner(data) || data[i]) return;  // prevent overwriting

    data[i] = isO ? 'O' : 'X';

    onPlay(i);
  }

  let status;


  let winner = judgeWinner(data);
  if (winner) {
    status = `Winner: ${winner}`;
  } else {
    status = `Player: ${isO ? "O" : "X"}`;
  }

  return (
    <>
      <h1>{status}</h1>

      <div className="grid grid-cols-[repeat(3,50px)] grid-rows-[repeat(3,50px)]">
        {
          data.map((cell, i) => (
            <Cell key={i} value={cell} isO={isO} onClick={() => handleClick(i)} />
          ))
        }
      </div>
    </>
  )
}

export function judgeWinner(data) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];

    if (data[a] && data[a] === data[b] && data[a] === data[c]) {
      return data[a];
    }
  }

  return null;

}
export default Game;
