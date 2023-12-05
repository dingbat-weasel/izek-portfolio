import { createContext, useState } from "react";
import Board from "../features/horseyjump/Board";

export const KnightContext = createContext(null);

function HorseyJump() {
  const [knightPosition, setKnightPosition] = useState({ x: 3, y: 4 });

  return (
    <KnightContext.Provider
      value={{
        knightPosition,
        setKnightPosition,
      }}
    >
      <Board />
    </KnightContext.Provider>
  );
}

export default HorseyJump;
