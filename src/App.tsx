import { useState } from 'react';
import words from './wordlList.json';
import HangmanDrawing from './HangmanDrawing';
import HangmanWord from './HangmanWord';
import Keyboard from './Keyboard';


const containerStyle: React.CSSProperties = {
    maxWidth: "800px",
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
    margin: "0 auto",
    alignItems: "center",
};

const titleStyle: React.CSSProperties = {
    fontSize: "2rem",
    textAlign: "center",
};

const App = () => {
    const [wordToGuess, setWordToGuess] = useState(() => {
        return words[Math.floor(Math.random() * words.length)];
    });

    const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

    return (
        <div style={containerStyle}>
            <div style={titleStyle}>Lose Win</div>
            <HangmanDrawing/>
            <HangmanWord />
            <Keyboard />
        </div>
    );
};

export default App;
