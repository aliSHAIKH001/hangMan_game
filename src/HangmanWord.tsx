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
    const word = "test"
    return (
        <div style={containerStyle}>
            {word.split("").map((letter, index) => (
                <span style={letterStyle}>
                    <span>
                       {letter}
                    </span>
                </span>
            ))}
        </div>
    )
}
export default HangmanWord
