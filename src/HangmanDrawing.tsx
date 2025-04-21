const BODY_PARTS = [
    <div
        className="absolute top-[50px] right-[-20px] w-[50px] h-[50px] rounded-full border-[10px] border-black"
        key="head"
    />,
    <div
        className="absolute top-[100px] right-0 w-[10px] h-[20px] bg-black"
        key="neck"
    />,
    <div
        className="absolute top-[120px] right-0 w-[10px] h-[100px] bg-black"
        key="body"
    />,
    <div
        className="absolute top-[150px] right-[-90px] w-[90px] h-[10px] bg-black transform origin-bottom-left rotate-[-30deg]"
        key="right-arm"
    />,
    <div
        className="absolute top-[150px] right-[10px] w-[90px] h-[10px] bg-black transform origin-bottom-right rotate-[30deg]"
        key="left-arm"
    />,
    <div
        className="absolute top-[210px] right-[-80px] w-[90px] h-[10px] bg-black transform origin-bottom-left rotate-[60deg]"
        key="right-leg"
    />,
    <div
        className="absolute top-[210px] right-0 w-[90px] h-[10px] bg-black transform origin-bottom-right rotate-[-60deg]"
        key="left-leg"
    />,
]

type HangManDrawingProps = {
    numberOfGuesses: number
}

const HangmanDrawing11 = ({ numberOfGuesses }: HangManDrawingProps) => {
    return (
        <div className="relative">
            {BODY_PARTS.slice(0, numberOfGuesses)}

            {/* small hanging bar */}
            <div className="absolute top-0 right-0 w-[10px] h-[50px] bg-black" />

            {/* top beam */}
            <div className="w-[200px] h-[10px] bg-black ml-[120px]" />

            {/* upright beam */}
            <div className="h-[300px] w-[10px] bg-black ml-[120px]" />

            {/* base beam */}
            <div className="w-[250px] h-[10px] bg-black" />
        </div>
    )
}

export default HangmanDrawing11
