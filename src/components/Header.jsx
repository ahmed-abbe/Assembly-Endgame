import { useRef, useEffect } from "react"; 


// eslint-disable-next-line react/prop-types
const Header = ({ remainingGuesses, isGameOver, timer, setTimerOn }) => {
    const timerElement = useRef(null)
    const counter = useRef(null);
    const time = 120

    useEffect(() => {
        if (timerElement.current !== null && !isGameOver) {
            counter.current = timer(timerElement.current, time);
        } else if (isGameOver) {
            clearInterval(counter.current);
            setTimerOn(false)
        }
    }, [isGameOver])

    return (
        <header>
            <h1 className="heading">Assembly: Endgame</h1>
            <p>
                Guess the word in under 8 attempts to keep the programming world
                safe from Assembly!
            </p>
            <div className="game-info">
                <span className="remaining-guesses">
                    Remaining guesses: {remainingGuesses}
                </span>
                <span ref={timerElement} className="timer"></span>
            </div>
        </header>
    );
};

export default Header;
