import {useState, CSSProperties, FC, useEffect, useCallback} from 'react';
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

    const addGuessedLetter = useCallback((letter: string) => {
        if (guessedLetters.includes(letter)) return
        setGuessedLetters(currentLetters => [...currentLetters, letter]);
    }, [guessedLetters])
    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            const key = e.key;
            if (!key.match(/^[a-z]$/)) return
            e.preventDefault()
            addGuessedLetter(key);
        }
        // ! Since the handler is an initial version, it will remember guessed letters as an empty array.
        document.addEventListener("keypress", handler)

        return () => {
            document.removeEventListener("keypress", handler);
        }
        // * change the useEffect each time the guessed letter changes
    }, [guessedLetters])

    console.log(guessedLetters);


    return (
        <div style={containerStyle}>
            <div style={titleStyle}>Lose Win</div>
            <HangmanDrawing numberOfGuesses={incorrectLetters.length}/>
            <HangmanWord guessedLetters={guessedLetters} wordToGuess={wordToGuess} />
            {/* ! The keyboard container has to be stretched for the grid container to work. */}
            <div style={{alignSelf: "stretch"}}>
                <Keyboard
                    activeLetters={guessedLetters.filter(letter => wordToGuess.includes(letter))}
                    inactiveLetters={incorrectLetters}
                    addGuessedLetter={addGuessedLetter}
                />
            </div>
        </div>
    );
};

export default App;
