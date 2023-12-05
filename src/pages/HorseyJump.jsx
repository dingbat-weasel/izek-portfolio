import { createContext } from "react";
import Board from "../features/horseyjump/Board";

const BoardContext = createContext(null);

function HorseyJump() {
  return (
    <BoardContext.Provider
      value={{
        wN: "c4",
      }}
    >
      <Board />
    </BoardContext.Provider>
  );
}

export default HorseyJump;
