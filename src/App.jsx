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

  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState([]);

  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [guesses, setGuesses] = useState(3);
  const [score, setScore] = useState(0);

  const pickWordAndCategory = () => {
    // pick a random category
    const categories = Object.keys(words);
    const category =
      categories[Math.floor(Math.random() * Object.keys(categories).length)];

    // pick a random word
    const word =
      words[category][Math.floor(Math.random() * words[category].length)];

    return { word, category };
  };

  pickWordAndCategory();

  // start secret word
  const startGame = () => {
    // pick a random word and category
    const { word, category } = pickWordAndCategory();

    // create an array of letters
    const wordLetters = Array.from(word).map((letter) => letter.toLowerCase());
    console.log(wordLetters);

    // fill states
    setPickedWord(word);
    setPickedCategory(category);
    setLetters(wordLetters);
    setCurrentStage(stages[1].name);
  };

  // process verify the letter input
  const verifyLetter = (letter) => {
    console.log(letter);
  };

  // restarts the game
  const retry = () => {
    setCurrentStage(stages[0].name);
  };

  return (
    <div className="App">
      {currentStage === "start" && <StartScreen startGame={startGame} />}
      {currentStage === "game" && (
        <Game
          verifyLetter={verifyLetter}
          pickedWord={pickedWord}
          pickedCategory={pickedCategory}
          letters={letters}
          guessedLetters={guessedLetters}
          wrongLetters={wrongLetters}
          guesses={guesses}
          score={score}
        />
      )}
      {currentStage === "end" && <GameOver retry={retry} />}
    </div>
  );
}

export default App;
