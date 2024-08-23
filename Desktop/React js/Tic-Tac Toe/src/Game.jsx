import React, { useState, useEffect } from "react";

function Square({ value, onClick }) {
  return (
    <div className="square" onClick={onClick}>
      {value}
    </div>
  );
}

const Game = () => {
  const [isTurn, setIsTurn] = useState(false);
  const [square, setIsSquare] = useState(Array(9).fill(""));
  const [status, setStatus] = useState("");

  function restart() {
    setIsTurn(true);
    setIsSquare(Array(9).fill(""));
  }

  function isWinning(squares) {
    const winningPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
      [0, 3, 6],
      [1, 4, 7],
    ];

    for (let i = 0; i < winningPatterns.length; i++) {
      const [x, y, z] = winningPatterns[i];

      if (
        squares[x] &&
        squares[x] === squares[y] &&
        squares[y] === squares[z]
      ) {
        return squares[x];
      }
    }

    return null;
  }

  function handleClick(index) {
    let cpySquares = [...square];
    if (isWinning(cpySquares) || cpySquares[index]) return;
    cpySquares[index] = isTurn ? "X" : "O";
    setIsTurn(!isTurn);
    setIsSquare(cpySquares);
  }

  useEffect(() => {
    if (!isWinning(square) && square.every((item) => item !== "")) {
      setStatus("This game is tied");
    } else if (isWinning(square)) {
      setStatus(`Congratulations! ${isWinning(square)} wins the game`);
    } else {
      setStatus(`Next player is ${isTurn ? "X" : "O"}`);
    }
  }, [isTurn, square]);

  return (
    <div className="game-container">
      <div className="tic-tac-toe-container">
        <div className="row">
          <Square value={square[0]} onClick={() => handleClick(0)} />
          <Square value={square[1]} onClick={() => handleClick(1)} />
          <Square value={square[2]} onClick={() => handleClick(2)} />
        </div>
        <div className="row">
          <Square value={square[3]} onClick={() => handleClick(3)} />
          <Square value={square[4]} onClick={() => handleClick(4)} />
          <Square value={square[5]} onClick={() => handleClick(5)} />
        </div>
        <div className="row">
          <Square value={square[6]} onClick={() => handleClick(6)} />
          <Square value={square[7]} onClick={() => handleClick(7)} />
          <Square value={square[8]} onClick={() => handleClick(8)} />
        </div>
      </div>
      <h1 className="status">{status}</h1>
      <button className="restart-button" onClick={restart}>
        Restart
      </button>
    </div>
  );
};

export default Game;
