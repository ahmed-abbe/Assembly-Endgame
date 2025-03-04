import clsx from "clsx";
import { getFarewellMessage } from "../utils/utils";

const Status = (props) => {
    const IncorrectLastLetter =
        !props.word.includes(props.lastGuessedLetter) &&
        props.lastGuessedLetter;

    function displayStatus() {
        if (props.isGameOver) {
            if (props.isGameWon) {
                return (
                    <>
                        <h2>You win!</h2>
                        <p>Well done! 🎉</p>
                    </>
                );
            } else {
                return (
                    <>
                        <h2>Game over!</h2>
                        <p>You lose! Better start learning Assembly 😭</p>
                    </>
                );
            }
        } else if (IncorrectLastLetter) {
            return (
                <p>
                    {getFarewellMessage(props.languages[props.wrongGuessCount - 1].name)}
                </p>
            );
        }

        return null;
    }

    const className = clsx("status", {
        won: props.isGameWon,
        lost: props.isGameLost,
        farewell: !props.isGameOver && IncorrectLastLetter,
    });

    return <div className={className}>{displayStatus()}</div>;
};

export default Status;
