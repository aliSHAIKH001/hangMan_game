import React from 'react'

const BAR_COLOR = 'black'

type BarConfig = Partial<React.CSSProperties> & {
    width: number
    height: number
}

const bars: BarConfig[] = [
    // rope
    { width: 10, height: 50, top: 0, right: 0 },
    // beam
    { width: 200, height: 10, top: 0, left: 120 },
    // vertical post
    { width: 10, height: 400, top: 10, left: 120 },
    // base
    { width: 250, height: 10, bottom: 0, left: 0 },
]

const HangmanDrawingss: React.FC = () => (
    <div
        style={{
            position: 'relative',
            width: 250,
            height: 450,
            // optional: to visualize the container
            // border: '1px solid lightgray',
        }}
    >
        {bars.map((cfg, i) => (
            <div
                key={i}
                style={{
                    position: 'absolute',
                    backgroundColor: BAR_COLOR,
                    ...cfg,
                }}
            />
        ))}
    </div>
)

export default HangmanDrawingss
