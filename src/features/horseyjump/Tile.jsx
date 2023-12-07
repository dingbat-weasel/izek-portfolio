import { useContext } from "react";
import { KnightContext } from "../../pages/HorseyJump";
import Knight from "./Knight";

function Tile({ variation, coordinates }) {
  const { knightPosition } = useContext(KnightContext);

  return (
    <div
      className={`${coordinates.x}${coordinates.y} ${variation} grid h-20 w-20 place-content-center`}
    >
      {knightPosition.x === coordinates.x &&
        knightPosition.y === coordinates.y && <Knight />}
    </div>
  );
}

export default Tile;
