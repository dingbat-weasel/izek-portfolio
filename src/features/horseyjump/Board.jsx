import { useRef } from "react";
import Tile from "./Tile";

function Board() {
  let board = [];
  let activePiece = null;

  const boardRef = useRef(null);

  function grabPiece(e) {
    const element = e.target;

    if (element.classList.contains("bg-wN")) {
      const x = e.clientX - 50;
      const y = e.clientY - 50;

      element.style.position = "absolute";
      element.style.left = `${x}px`;
      element.style.top = `${y}px`;

      activePiece = element;
    }
  }

  function movePiece(e) {
    const board = boardRef.current;

    if (activePiece && board) {
      const minX = board.offsetLeft - 30;
      const minY = board.offsetTop - 30;
      const maxX = board.offsetLeft + board.clientWidth - 60;
      const maxY = board.offsetTop + board.clientHeight - 60;

      const x = e.clientX - 50;
      const y = e.clientY - 50;

      activePiece.style.position = "absolute";

      if (x < minX) {
        activePiece.style.left = `${minX}px`;
      } else if (x > maxX) {
        activePiece.style.left = `${maxX}px`;
      } else {
        activePiece.style.left = `${x}px`;
      }

      if (y < minY) {
        activePiece.style.top = `${minY}px`;
      } else if (y > maxY) {
        activePiece.style.top = `${maxY}px`;
      } else {
        activePiece.style.top = `${y}px`;
      }
    }
  }

  function dropPiece(e) {
    if (activePiece) activePiece = null;
  }

  const horizontalAxis = [1, 2, 3, 4, 5, 6, 7, 8];
  const verticalAxis = [1, 2, 3, 4, 5, 6, 7, 8];

  for (let i = verticalAxis.length - 1; i >= 0; i--) {
    for (let j = 0; j < horizontalAxis.length; j++) {
      const variationInt = i + j + 2;

      board.push(
        <Tile
          variation={variationInt % 2 === 0 ? "bg-zinc-600" : "bg-zinc-300"}
          coordinates={{ x: horizontalAxis[j], y: verticalAxis[i] }}
          key={`${horizontalAxis[j]}${verticalAxis[i]}`}
        />,
      );
    }
  }

  return (
    <div
      onMouseDown={(e) => grabPiece(e)}
      onMouseMove={(e) => movePiece(e)}
      onMouseUp={(e) => dropPiece(e)}
      className="grid h-[40rem] w-[40rem] grid-cols-8"
      ref={boardRef}
    >
      {board}
    </div>
  );
}

export default Board;
