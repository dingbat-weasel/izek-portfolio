import Knight from "./Knight";
import Square from "./Square";

function renderSquare(i, [knightX, knightY]) {
  const x = i % 8;
  const y = Math.floor(i / 8);
  const isKnightHere = x === knightX && y === knightY;
  const black = (x + y) % 2 === 1;
  const piece = isKnightHere ? <Knight /> : ".";

  return (
    <div key={i} style={{ width: "12.5%", height: "12.5%" }}>
      <Square black={black}>{piece}</Square>
    </div>
  );
}

function Board({ knightPosition }) {
  const squares = [];
  for (let i = 0; i < 64; i++) {
    const square = renderSquare(i, knightPosition);

    squares.push(square);
  }

  return <div className="flex h-full w-full flex-wrap">{squares}</div>;
}

export default Board;
