import {useState, CSSProperties, FC, useEffect} from 'react';
import words from './wordlList.json';
import HangmanDrawing from './HangmanDrawing';
import HangmanWord from './HangmanWord';
import Keyboard from './Keyboard';
import "./index.css"


const containerStyle: CSSProperties = {
    maxWidth: "800px",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
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

    const incorrectLetters = guessedLetters.filter(letter => !wordToGuess.includes(letter))

    const addGuessedLetter = (letter: string) => {
        if (guessedLetters.includes(letter)) return
        setGuessedLetters(currentLetters => [...currentLetters, letter]);
    }
    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            const key = e.key;

            if (!key.match(/^[a-z]$/)) return

            e.preventDefault()
            addGuessedLetter(key);
        }
        document.addEventListener("keypress", handler)

        return () => {
            document.removeEventListener("keypress", handler);
        }
    }, [])


    return (
        <div style={containerStyle}>
            <div style={titleStyle}>Lose Win</div>
            <HangmanDrawing numberOfGuesses={incorrectLetters.length}/>
            <HangmanWord guessedLetters={guessedLetters} wordToGuess={wordToGuess} />
            {/* ! The keyboard container has to be stretched for the grid container to work. */}
            <div style={{alignSelf: "stretch"}}>
                <Keyboard/>
            </div>
        </div>
    );
};

export default App;
