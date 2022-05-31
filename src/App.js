import React,{useState, useEffect} from "react"
import Start from "./Components/start"
import Quizz from "./Components/quizz"
import Answers from "./Components/answers"

export default function App() {
  const [gameon, setGameon] = useState(false)
  const [quizz, setQuizz] = useState([])
  
  useEffect( () => {    
    fetch("https://opentdb.com/api.php?amount=10&category=24")
      .then(res => res.json())
      .then(data => setQuizz(data.results))
  }, [])

/*
  const newGame = () => {
    console.log("New game")
    start()
  }
*/

  const selectedAnswer = (q, s) => {
    console.log(`Your answer ${q}, correct ${s} `)
  
  }



  const start = () => {
    setGameon(true)
    console.log("Game on")
  }


  //results
  const quest = quizz.map(e => {      
    return (
      <div>
        <Quizz  
        question = {e.question}
        wrongAnswers = {e.incorrect_answers}
        correctAnswer = {e.correct_answer}
        selAnswer = {selectedAnswer}
        />   
      </div>
    )
})

  
  console.log("quizz results[]:", quizz)
  return (
    <div className="App">
      <Start
        game = {gameon}
        begin = {() => start()}
      />
      <Answers />         

      { gameon && quest }
    </div>
  );
}
