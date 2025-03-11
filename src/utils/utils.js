import { words } from "../constants/words";

// Get a random word from the words array
export function getRandomWord() {
    // Get random Index
    return words[randomNumber(words.length)]; 
}

// Get a random farewell message 
export function getFarewellMessage(language) {
    const messages = [
        `Farewell, ${language}`,
        `Adios, ${language}`,
        `R.I.P., ${language}`,
        `We'll miss you, ${language}`,
        `Oh no, not ${language}!`,
        `${language} bites the dust`,
        `Gone but not forgotten, ${language}`,
        `The end of ${language} as we know it`,
        `Off into the sunset, ${language}`,
        `${language}, it's been real`,
        `${language}, your watch has ended`,
        `${language} has left the building`,
        `So long, ${language}, and thanks for all the code`,
        `Press F for ${language}`,
        `Requiescat in pace, ${language}`
    ]

    return messages[randomNumber(messages.length)];
}

// Get a random number 
export function randomNumber(num) {
    return Math.trunc(Math.random() * num)
}