import { createContext, useContext, useState } from "react";
import Knight from "./Knight";
import Square from "./Square";

const PositionContext = createContext([0, 2]);

function renderSquare(i, [knightX, knightY]) {
  const x = i % 8;
  const y = Math.floor(i / 8);
  const isKnightHere = x === knightX && y === knightY;
  const black = (x + y) % 2 === 1;
  const piece = isKnightHere ? <Knight /> : null;

  return (
    <div key={i}>
      <Square onClick={handleSquareClick(x, y)} black={black}>
        {piece}
      </Square>
    </div>
  );
}

function handleSquareClick(toX, toY) {
  console.log("clicked", toX, toY);
}

export default function Board() {
  const position = useContext(PositionContext);
  const [knightPosition, setKnightPosition] = useState(position);

  const squares = [];
  for (let i = 0; i < 64; i++) {
    squares.push(renderSquare(i, position));
  }

  return (
    <div className="max-h[500]overflow-scroll grid min-h-[500px] min-w-[500px] max-w-[500px] grid-cols-8 grid-rows-[8] border border-slate-500 bg-slate-300">
      {squares}
    </div>
  );
}
