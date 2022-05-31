import React from 'react';
import "../answers.css"

export default function Answers(props) {  
    console.log("props.test:", props.answer)

    return (
        <span>Your answer {props.answer}</span>
    )
}
