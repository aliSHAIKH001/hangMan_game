import React from 'react'
import styles from './keyboard.module.css'

type KeyboardProps = {
    activeLetters: string[];
    inactiveLetters: string[];
    addGuessedLetter: (letter: string) => void;
}

const containerStyle:React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr))",
    gap: ".5rem",
}
const KEYS = Array.from({ length: 26 }, (_, i) => String.fromCharCode(97 + i));

const Keyboard: React.FC = ({activeLetters, inactiveLetters, addGuessedLetter}: KeyboardProps) => {

    return (
        <div style={containerStyle}>
            {KEYS.map(key => {
                const isActive = activeLetters.includes(key);
                const isInActive = inactiveLetters.includes(key);
                return (
                    <button onClick={() => addGuessedLetter(key)}
                            className={`${styles.btn} ${isActive ? styles.active : ""} ${isInActive ? styles.inactive : ""} `}
                            disabled={isActive || isInActive}
                            key={key}>
                        {key}
                    </button>
                )
            })}
        </div>
    )
}
export default Keyboard
