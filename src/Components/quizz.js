import React, {useState} from 'react';
import "../quizz.css"
import Answers from "../Components/answers"

export default function Quizz(props) {
    const [answer, setAnswer] = useState([])
    const [check, setCheck] = useState(true)
    const wrongOne = props.wrongAnswers
    //console.log("Incorrect answers-> ", wrongOne)
    //console.log("Correct answser->", props.correctAnswer)
    const cAnswer = props.correctAnswer
    var checkCorrect = true;

    //console.log("Answers: " + answer.q +  " and " +  answer.cAnswer)
    console.log("answer state : ", answer)


    const checkRes = (checkCorrect) => checkCorrect
    console.log(checkRes)


    const passer = (q) => {
        console.log("Passer function reached")
        cAnswer === q ? setAnswer(["your answer " + q + " is correct"]) : setAnswer(["Incorrect, correct is " + cAnswer])
        for( let  i = 0; i < props.wrongAnswers.length; i++)
        {
            console.log("Checking correct against ", props.wrongAnswers[i])
            if (cAnswer !== props.wrongAnswers[i]){
                checkCorrect = false                
                console.log("checkCorrect = ", checkCorrect)
                setCheck(false)
            }
            else if (cAnswer === props.wrongAnswers[i])
            {
                checkCorrect = true //if correct is one of the answers
                setCheck(true)
            }
        }

    }
    

    return (
        <div className='quizz'>
            <h3 className='quizz--header'>Quizz</h3>
            <div className = "quizz-group1">
                <span className='quizz--question'>
                    {props.question}
                </span>
                {wrongOne.map(q => <button className = "quizz--button" onClick = {() => passer(q)}>{q}</button>)}
            </div>
            {answer !== null &&
            <Answers 
                answer = {answer}
                wrongOnes = {wrongOne}
                correct = {cAnswer}
                check = {check}
                
            />}
            
          </div>
    );
}
