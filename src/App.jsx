import { useState } from "react";
import "./App.css";
import StartScreen from "./components/StartScreen";
import GameOver from "./components/GameOver";
import Game from "./components/Game";

import { wordsList } from "./data/words";

const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" },
];

function App() {
  const [currentStage, setCurrentStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  // start secret word
  const startGame = () => {
    setCurrentStage(stages[1].name);
  };

  // process verify the letter input
  const verifyLetter = () => {
    setCurrentStage(stages[2].name);
  };

  // restarts the game
  const retry = () => {
    setCurrentStage(stages[0].name);
  };

  return (
    <div className="App">
      {currentStage === "start" && <StartScreen startGame={startGame} />}
      {currentStage === "game" && <Game verifyLetter={verifyLetter} />}
      {currentStage === "end" && <GameOver retry={retry}/>}
    </div>
  );
}

export default App;
