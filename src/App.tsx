import {useState, CSSProperties, FC, useEffect, useCallback} from 'react';
import words from './wordlList.json';
import HangmanDrawing from './HangmanDrawing';
import HangmanWord from './HangmanWord';
import Keyboard from './Keyboard';
import "./index.css"

function getWord() {
    return words[Math.floor(Math.random() * words.length)];
}

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
    const [wordToGuess, setWordToGuess] = useState<string>(getWord);

    const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

    const incorrectLetters = guessedLetters.filter(letter => !wordToGuess.includes(letter))

    const isLoser = incorrectLetters.length >=  7;
    const isWinner = wordToGuess.split("").every(letter => guessedLetters.includes(letter));

    const addGuessedLetter = useCallback((letter: string) => {
        if (guessedLetters.includes(letter) || isLoser || isWinner) return
        setGuessedLetters(currentLetters => [...currentLetters, letter]);
    }, [guessedLetters, isLoser, isWinner])


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

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            const key = e.key
            if (key !== "Enter") return

            e.preventDefault()
            setGuessedLetters([])
            setWordToGuess(getWord())
        }

        document.addEventListener("keypress", handler)

        return () => {
            document.removeEventListener("keypress", handler)
        }
    }, [])



    return (
        <div style={containerStyle}>
            <div style={titleStyle}>
                {isWinner && "Winner - Refresh to try again"}
                {isLoser && "Nice Try! - Refresh to try again"}
            </div>
            <HangmanDrawing numberOfGuesses={incorrectLetters.length}/>
            <HangmanWord reveal={isLoser} guessedLetters={guessedLetters} wordToGuess={wordToGuess} />
            {/* ! The keyboard container has to be stretched for the grid container to work. */}
            <div style={{alignSelf: "stretch"}}>
                <Keyboard
                    disabled={isLoser || isWinner}
                    activeLetters={guessedLetters.filter(letter => wordToGuess.includes(letter))}
                    inactiveLetters={incorrectLetters}
                    addGuessedLetter={addGuessedLetter}
                />
            </div>
        </div>
    );
};

export default App;
