import { useContext } from "react";
import { KnightContext } from "../../pages/HorseyJump";
import Knight from "./Knight";

function Tile({ variation, coordinates }) {
  const { knightPosition } = useContext(KnightContext);

  return (
    <div className={`h-20 w-20 ${variation} grid place-content-center`}>
      {knightPosition.x === coordinates.x &&
        knightPosition.y === coordinates.y && <Knight />}
    </div>
  );
}

export default Tile;
