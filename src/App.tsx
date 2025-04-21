import { useState, CSSProperties, FC } from 'react';
import words from './wordlList.json';
import HangmanDrawing from './HangmanDrawing';
import HangmanWord from './HangmanWord';
import Keyboard from './Keyboard';




const containerStyle: CSSProperties = {
    maxWidth: "800px",
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
    margin: "0 auto",
    alignItems: "center",
};

const titleStyle: CSSProperties = {
    fontSize: "2rem",
    textAlign: "center",
};

const App: FC = () => {
    const [wordToGuess, setWordToGuess] = useState<string>(() => {
        return words[Math.floor(Math.random() * words.length)];
    });

    const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

    return (
        <div style={containerStyle}>
            <div style={titleStyle}>Lose Win</div>
            <HangmanDrawing/>
            <HangmanWord />
            <div style={{alignSelf: "stretch"}}>
                <Keyboard/>
            </div>
        </div>
    );
};

export default App;
