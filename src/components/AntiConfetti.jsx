import { useRef, useEffect } from "react";
import { randomNumber } from "../utils/utils";

const AntiConfetti = () => {
    const antiConfetti = useRef(null);
    const emojis = ["😭", "😪", "😔", "🤕", "😢", "😰", "😩", "😫", "☹️", "💀"];

    const length = emojis.length;

    function getAntiConfetti() {
        return emojis[randomNumber(length)];
    }

    function getStyle() {
        // Get a random Number between 20 and 35
        const fontSize = randomNumber(16) + 20,
            left = randomNumber(document.documentElement.clientWidth),
            transform = `rotateX(${randomNumber(360)}deg) rotateY(${randomNumber(360)}deg)`,
            animation = `confetti linear forwards`,
            animationDuration = `${randomNumber(5) + 2}`;
        return {
            fontSize,
            left,
            transform,
            animation,
            animationDuration,
        };
    }

    useEffect(() => {
        const timer = setInterval(() => {
            let styles = getStyle();

            if (antiConfetti.current !== null) {
                let span = document.createElement("span");
                span.className = "icon";
                span.textContent = getAntiConfetti();
                span.style.cssText = `
                    font-size: ${styles.fontSize}px;
                    left: ${styles.left}px;
                    transform: ${styles.transform};
                    animation: ${styles.animation};
                    animation-duration: ${styles.animationDuration}s;
                `;

                antiConfetti.current.append(span);
                const timeOut = setTimeout(() => {
                    span.remove();
                    clearTimeout(timeOut);
                }, styles.animationDuration * 1000)
            }
        }, 10);

        return () => clearInterval(timer);
    }, []);

    return <div ref={antiConfetti}></div>;
};

export default AntiConfetti;
