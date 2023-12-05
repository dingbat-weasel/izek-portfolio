import { useContext } from "react";
import { BoardContext } from "../../pages/HorseyJump";

function Tile({ variation, coordinates }) {
  const { knightPosition } = useContext(BoardContext);

  return (
    <div className={`h-20 w-20 ${variation} grid place-content-center`}>
      {coordinates === knightPosition && (
        <img className="h-20 w-20" src="/assets/horseyjump/wN.png" />
      )}
    </div>
  );
}

export default Tile;
