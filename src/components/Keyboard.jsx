import clsx from "clsx";
import { letters } from "../constants/letters";

const Keyboard = ({ word, isGameOver, addGuessedLetter, guessedLetters }) => {
    const keyboardClass = clsx("keyboard", isGameOver && "game-over");

    return (
        <div className={keyboardClass}>
            {letters.map((letter) => {
                const isLetterGuessed = guessedLetters.includes(letter);
                const correctLetterGuessed = isLetterGuessed && word.includes(letter);
                const wrongLetterGuessed = isLetterGuessed && !correctLetterGuessed;
                const buttonClass = clsx("letter", {
                    correct: correctLetterGuessed,
                    wrong: wrongLetterGuessed,
                });

                return (
                    <button
                        key={letter}
                        className={buttonClass}
                        onClick={
                            isGameOver ? null : () => addGuessedLetter(letter)
                        }
                    >
                        {letter.toUpperCase()}
                    </button>
                );
            })}
        </div>
    );
};

export default Keyboard;
