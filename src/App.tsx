import { useState } from "react";

// components
import Play from "./components/Play";
import GameMode from "./components/GameMode";

function App() {
  const [gameState, setGameState] = useState<"pick" | "play">("pick");
  const [gameTheme, setGameTheme] = useState<"numbers" | "icons" | "">("");
  const [gameSize, setGameSize] = useState<"4x4" | "6x6" | "">("");

  const startGame = (theme: string, gridSize: string) => {
    setGameState("play");
    setGameTheme(theme as "numbers" | "icons");
    setGameSize(gridSize as "4x4" | "6x6");
  };

  const restartGame = () => {
    console.log("restart");
  };

  const newGame = () => {
    setGameState("pick");
    console.log("new");
  };

  return (
    <div className="w-screen h-screen overflow-hidden p-2 bg-dark flex items-center justify-center">
      {gameState === "pick" && (
        <GameMode
          gameTheme={gameTheme}
          gameSize={gameSize}
          startGame={startGame}
        />
      )}
      {gameState === "play" && (
        <Play
          theme={gameTheme}
          gridSize={gameSize}
          restartGame={restartGame}
          newGame={newGame}
        />
      )}
    </div>
  );
}

export default App;
