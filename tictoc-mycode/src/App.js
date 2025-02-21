import React, { useState } from "react";
import Cell from "./Cell";

export default function Square() {
  let data = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
  ]

  const Winner = Object.freeze({
    X: 'X',
    O: 'O',
    TIE: 'TIE',
    NONE: 'NONE'
  });

  let [board, setBoard] = useState(data);
  let [player, setPlayer] = useState(Winner.X);
  let [count, setCount] = useState(0);
  let [judgement, setJudgement] = useState(Winner.NONE);

  const checkWinner = (row, col, player) => {
    console.log("check winner: ", board.length);
    for (let i = 0; i < board.length; i++) {
      console.log("Data: ", i, ", ", col, " => ", board[i][col]);
      if (board[i][col] !== player) {
        console.log("No winner");
        break;
      } else {
        console.log("Win!!!");
        return player;
      }
    }

    for (let i = 0; i < data[0].length; i++) {
      if (data[row][i] !== player) {
        break;
      } else {
        return player;
      }
    }

    // diagonal
    if (row === col) {
      for (let i = 0; i < data.length; i++) {
        if (data[i][i] !== player) {
          break;
        } else {
          return player;
        }
      }

      for (let i = 0; i < data.length; i++) {
        if (data[i][data.length - 1 - i] !== player) {
          break;
        } else {
          return player;
        }
      }
    }

    return Winner.NONE;
  }

  const clickCell = (row, col) => {

    if (board[row][col] !== ' ') {
      return
    }

    let newBoard = board.map((row) => row.slice());
    newBoard[row][col] = player;
    setBoard(newBoard);

    setJudgement(checkWinner(row, col, player));
    setCount(count + 1);

    if (judgement === Winner.NONE) {
      if (count < 9) {
        setPlayer(player === Winner.X ? Winner.O : Winner.X);
      } else {
        setJudgement(Winner.TIE);
      }
    }
  }

  return (
    <>
      {judgement === Winner.NONE
        ? <h1 className="title">{player}'s turn</h1>
        : <h1 className="title">{judgement === Winner.TIE ? "It's a tie!" : judgement + " wins!"}</h1>}

      <div className="board" >
        {
          data.map((row, i) => (
            row.map((col, j) => (
              <Cell key={i + "." + j} row={i} col={j} data={board} onClick={() => clickCell(i, j)} />
            ))
          ))
        }
      </div >
    </>
  );
}
