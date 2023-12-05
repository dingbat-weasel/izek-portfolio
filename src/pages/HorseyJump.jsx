import { createContext, useState } from "react";
import Board from "../features/horseyjump/Board";

export const BoardContext = createContext(null);

function HorseyJump() {
  const [knightPosition, setKnightPosition] = useState("e4");

  return (
    <BoardContext.Provider
      value={{
        knightPosition,
        setKnightPosition,
      }}
    >
      <Board />
    </BoardContext.Provider>
  );
}

export default HorseyJump;
