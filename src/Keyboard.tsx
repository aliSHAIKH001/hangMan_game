import React from 'react'
import styles from './keyboard.module.css'

const containerStyle:React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr))",
    gap: ".5rem",
}

const Keyboard: React.FC = () => {
    const KEYS = Array.from({ length: 26 }, (_, i) => String.fromCharCode(97 + i));

    return (
        <div style={containerStyle}>
            {KEYS.map(key => {
                return (
                    <button className={styles.btn} key={key}>
                        {key}
                    </button>
                )
            })}
        </div>
    )
}
export default Keyboard
