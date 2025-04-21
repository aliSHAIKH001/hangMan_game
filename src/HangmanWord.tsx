import React from 'react'

const containerStyle: React.CSSProperties = {
    display: "flex",
    gap: ".25em",
    fontSize: "6rem",
    fontWeight: "bold",
    textTransform: "uppercase",
    fontFamily: "monospace",
}

const letterStyle: React.CSSProperties = {
    borderBottom: "0.1em solid black",
}


const HangmanWord = () => {
    const word = "test";
    const guessedLetters= ["t", "e"];


    return(
        <div style={containerStyle}>
            {word.split("").map((letter, index) => (
                <span key={index} style={letterStyle}>
                    <span style={{visibility: guessedLetters.includes(letter) ? "visible" : "hidden"}}>
                       {letter}
                    </span>
                </span>
            ))}
        </div>
    )
}
export default HangmanWord
