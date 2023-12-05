import Tile from "./Tile";

function Board() {
  let board = [];

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

  return <div className="grid h-[40rem] w-[40rem] grid-cols-8">{board}</div>;
}

export default Board;
