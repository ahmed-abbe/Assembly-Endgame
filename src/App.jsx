import { useState } from "react";
import { languages } from "./constants/languages";
import Header from "./components/Header";
import Status from "./components/Status";
import Languages from "./components/Languages";
import Inputs from "./components/Inputs";
import Keyboard from "./components/Keyboard";
import Confetti from "react-confetti";
import AntiConfetti  from "./components/AntiConfetti";
import { getRandomWord } from "./utils/utils";

const wrongGuessesLimit = languages.length - 1;

const App = () => {
    const [word, setWord] = useState(() => getRandomWord());
    const [guessedLetters, setGuessedLetters] = useState([]);
    const [timerOn, setTimerOn] = useState(true);

    const wrongGuessCount = guessedLetters.filter(
        (letter) => !word.includes(letter.toLowerCase())
    ).length;
    const remainingGuesses = wrongGuessesLimit - wrongGuessCount;
    const isGameWon = word
        .split("")
        .every((letter) => guessedLetters.includes(letter));
    const isGameOver = isGameWon || remainingGuesses < 1 || !timerOn;
    const isGameLost = isGameOver && !isGameWon;
    const lastGuessedLetter = guessedLetters[guessedLetters.length - 1];

    // Add guessed letter to the guessed letters state
    function addGuessedLetter(letter) {
        setGuessedLetters((prevGuessedLetters) => {
            // Make sure the added letter not in the state already
            if (prevGuessedLetters.includes(letter)) {
                return prevGuessedLetters;
            }

            return [...prevGuessedLetters, letter];
        });
    }

    function newGame() {
        setWord(getRandomWord());
        setGuessedLetters([]);
        setTimerOn(true)
    }

    // Add timer to the game
    function timer(element, time) {
        element.innerHTML = `Remaining time: ${formatTime(time)}`;

        const counter = setInterval(() => {
            time--;
            element.innerHTML = `Remaining time: ${formatTime(time)}`;
            if (time === 0) {
                element.innerHTML = `Time's up`;
                setTimerOn(false);
                clearInterval(counter);
            }
        }, 1000);

        return counter;
    }

    function formatTime(time) {
        return `${Math.floor(time / 60)
            .toString().padStart(2, '0')}:${Math.floor(time % 60)
            .toString().padStart(2, '0')}`;
    }

    return (
        <section className="game">
            <div className="container">
                {isGameWon && <Confetti />}
                {isGameLost && <AntiConfetti />}
                <Header
                    remainingGuesses={remainingGuesses}
                    isGameOver={isGameOver}
                    timer={timer}
                    setTimerOn={setTimerOn}
                />
                <Status
                    languages={languages}
                    isGameLost={isGameLost}
                    isGameOver={isGameOver}
                    isGameWon={isGameWon}
                    wrongGuessCount={wrongGuessCount}
                    lastGuessedLetter={lastGuessedLetter}
                    word={word}
                />
                <Languages
                    languages={languages}
                    wrongGuessCount={wrongGuessCount}
                />
                <Inputs
                    word={word.split("")}
                    isGameLost={isGameLost}
                    guessedLetters={guessedLetters}
                />
                <Keyboard
                    word={word}
                    isGameOver={isGameOver}
                    addGuessedLetter={addGuessedLetter}
                    guessedLetters={guessedLetters}
                />
                {isGameOver && (
                    <button className="newgame-btn" onClick={newGame}>
                        New Game
                    </button>
                )}
            </div>
        </section>
    );
};

export default App;
