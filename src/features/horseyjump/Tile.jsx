import { useContext } from "react";
import { KnightContext } from "../../pages/HorseyJump";
import Knight from "./Knight";

function Tile({ variation, coordinates }) {
  const { knightPosition } = useContext(KnightContext);

  return (
    <div className={`h-20 w-20 ${variation} grid place-content-center`}>
      {coordinates.x}
      {coordinates.y}
    </div>
  );
}

export default Tile;
