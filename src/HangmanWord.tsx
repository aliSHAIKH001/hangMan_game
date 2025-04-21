import React from 'react'

type HangmanWordProps = {
    guessedLetters: string[],
    wordToGuess: string,
    reveal?: boolean,
}


const containerStyle: React.CSSProperties = {
    display: "flex",
    gap: ".25em",
    fontSize: "4rem",
    fontWeight: "bold",
    textTransform: "uppercase",
    fontFamily: "monospace",
}

const letterStyle: React.CSSProperties = {
    borderBottom: "0.1em solid black",
}


const HangmanWord = ({guessedLetters, wordToGuess, reveal=false}: HangmanWordProps) => {

    return(
        <div style={containerStyle}>
            {wordToGuess.split("").map((letter, index) => (
                <span key={index} style={letterStyle}>
                    <span style={{visibility: guessedLetters.includes(letter) || reveal ? "visible" : "hidden",
                                  color: !guessedLetters.includes(letter) && reveal ? "red" : "black" }}>
                       {letter}
                    </span>
                </span>
            ))}
        </div>
    )
}
export default HangmanWord
