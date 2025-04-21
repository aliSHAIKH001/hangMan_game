import React from 'react'

const bottomBar: React.CSSProperties = {
    height: "10px",
    width:  "250px",
    backgroundColor: "black"
}
const upRightBar: React.CSSProperties = {
    height: "300px",
    width: "10px",
    backgroundColor: "black",
    marginLeft: "120px",
}
const topBar: React.CSSProperties = {
    width: "200px",
    height: "10px",
    backgroundColor: "black",
    marginLeft: "120px"
}
const smallHangingBar: React.CSSProperties = {
    width: "10px",
    height: "50px",
    backgroundColor: "black",
    position: "absolute",
    top: 0,
    right: 0,
}
const headStyle: React.CSSProperties = {
    width: "50px",
    height: "50px",
    borderRadius: "100%",
    border: "10px solid black",
    position: "absolute",
    top: "50px",
    right: "-20px"
}
const HEAD = (
    <div style={headStyle}/>
)
const neckStyle:React.CSSProperties = {
    width: "10px",
    height: "20px",
    backgroundColor: "black",
    position: "absolute",
    top: "100px",
    right: 0,
}
const NECK = (
    <div style={neckStyle}></div>
)
const bodyStyle: React.CSSProperties = {
    width: "10px",
    height: "100px",
    backgroundColor: "black",
    position: "absolute",
    top: "120px",
    right: 0,
}
const BODY = (
    <div style={bodyStyle}></div>
)
const rightArmStyle: React.CSSProperties = {
    width: "90px",
    height: "10px",
    backgroundColor: "black",
    position: "absolute",
    top: "150px",
    right: "-90px",
    rotate: "-30deg",
    transformOrigin: "bottom left"
}
const RIGHT_ARM = (
    <div style={rightArmStyle}></div>
)
const leftArmStyle: React.CSSProperties = {
    width: "90px",
    height: "10px",
    backgroundColor: "black",
    position: "absolute",
    top: "150px",
    right: "10px",
    rotate: "30deg",
    transformOrigin: "bottom right"
}
const LEFT_ARM = (
    <div style={leftArmStyle}></div>
)
const rightLegStyle: React.CSSProperties = {
    width: "90px",
    height: "10px",
    backgroundColor: "black",
    position: "absolute",
    top: "210px",
    right: "-80px",
    rotate: "60deg",
    transformOrigin: "bottom left"
}
const RIGHT_LEG = (
    <div style={rightLegStyle}></div>
)
const leftLegStyle: React.CSSProperties = {
    width: "90px",
    height: "10px",
    backgroundColor: "black",
    position: "absolute",
    top: "210px",
    right: 0,
    rotate: "-60deg",
    transformOrigin: "bottom right"
}
const LEFT_LEG = (
    <div style={leftLegStyle}></div>
)
const BODY_PARTS = [HEAD, NECK,  BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];
type HangManDrawingProps = {
    numberOfGuesses: number
}

const HangmanDrawing = ({numberOfGuesses}: HangManDrawingProps) => {
    return (
        <div style={{position: "relative"}}>
            {BODY_PARTS.slice(0, numberOfGuesses)}
            <div style={smallHangingBar}/>
            <div style={topBar}/>
            <div style={upRightBar}/>
            <div style={bottomBar}/>
        </div>
    )
}
export default HangmanDrawing
