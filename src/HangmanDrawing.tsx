import React from 'react'

const bottomBar: React.CSSProperties = {
    height: "10px",
    width:  "250px",
    backgroundColor: "black"
}
const upRightBar: React.CSSProperties = {
    height: "400px",
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

const HangmanDrawing = () => {
    return (
        <div style={{position: "relative"}}>
            <div style={smallHangingBar}/>
            <div style={topBar}/>
            <div style={upRightBar}/>
            <div style={bottomBar}/>
        </div>
    )
}
export default HangmanDrawing
