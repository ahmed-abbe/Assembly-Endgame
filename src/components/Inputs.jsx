import clsx from "clsx"

const Inputs = ({ word, isGameLost, guessedLetters }) => {
    return (
        <div className="letter-inputs">
            {word.map((letter, index) => {
                const isLetterGuessed = guessedLetters.includes(letter);
                const correctGuessedLetter = isLetterGuessed
                    ? letter.toUpperCase()
                    : null;

                let notguessedLetter;
                if (isGameLost && !isLetterGuessed) {
                    notguessedLetter = letter.toUpperCase();
                }

                const className = clsx("input", notguessedLetter && "not-guessed")

                return (
                    <span key={index} className={className}>
                        {correctGuessedLetter || notguessedLetter}
                    </span>
                );
            })}
        </div>
    );
};

export default Inputs;
