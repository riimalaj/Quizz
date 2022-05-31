import React from 'react';
import "../answers.css"

export default function Answers(props) {  
    console.log("Answers component properties:", props)
    
    return (
        <div>
            <h3>{props.answer}</h3>
            {props.check === false && <span>It's intresting though that in multiple choices there is no correct answer included</span>}
        </div>
    )
}
