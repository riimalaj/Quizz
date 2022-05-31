import React from "react"
import '../start.css'

export default function Start(props){
    console.log(props)   
    return (
        <div className = "start">
            {props.game === false && <h3 className="start--header">Start a quizz</h3>}
            {props.game === false && <span className = "start--description">Politic quizz</span>}
            {props.game === false && <button className= "start--button" onClick = {props.begin}>Start a game</button>}
        </div>
    )
}