import React, {useState} from 'react';
import "../quizz.css"
import Answers from "../Components/answers"

export default function Quizz(props) {
    const [answer, setAnswer] = useState({})
    const wrongOne = props.wrongAnswers
    console.log("Incorrect answers-> ", wrongOne)
    console.log("Correct answser->", props.correctAnswer)
    const cAnswer = props.correctAnswer

    console.log("Answers: " + answer.q +  " and " +  answer.cAnswer)

    const passer = (q, cAnswer) => {
        console.log("Passer function reached. Parameters: ", q + " and " + cAnswer)
        setAnswer({q, cAnswer})    
        return(
            <Answers 
                answer {...answer}          
            />
        )  
    }

    return (
        <div className='quizz'>
            <h3 className='quizz--header'>Quizz</h3>
            <div className = "quizz-group1">
                <span className='quizz--question'>
                    {props.question}
                </span>
                {wrongOne.map(q => <button className = "quizz--button" onClick = {() => passer(q, cAnswer)}>{q}</button>)}
            </div>
            
          </div>
    );
}
