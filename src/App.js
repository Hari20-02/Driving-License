import React, { useState } from "react";
import './App.css';

function App() {
  const [showResults, setShowResults] = useState(false);
  const [score,setScore] = useState(0);
  const [currentQ,setcurrentQ] = useState(0);
  const questions = [
    {
      text: "The purpose of the road test is to make sure the applicant understands the rules of the road and the safety of driving. Therefore, the applicant may be tested on",
      options: [
        { id: 0, text: "stopping and turning", isCorrect: false },
        { id: 1, text: "nearing corners and intersections", isCorrect: false },
        { id: 2, text: "steering properly", isCorrect: false },
        { id: 3, text: "All of the Above", isCorrect: true },
      ],
    },
    {
      text: "Driving under the influence of intoxicating beverages means:",
      options: [
        { id: 0, text: "A driver's senses and judgment are impaired by alcohol.", isCorrect: true },
        { id: 1, text: "Driving even if the driver can handle one drink", isCorrect: false },
        { id: 2, text: "Drinking while in process of driving the vehicle", isCorrect: false },
        { id: 3, text: "The driver shows signs of being drunk.", isCorrect: false },
      ],
    },
    {
      text: "Under the GDL restrictions the holder of a Probationary Drive License under 21, is limited to the following passenger restrictions:",
      options: [
        { id: 0, text: "Dependents and one additional person, unless accompanied by a parent or guardian", isCorrect: true },
        { id: 1, text: "Dependents and only parents or guardians", isCorrect: false },
        { id: 2, text: "Any passengers from their shared residence plus one additional person", isCorrect: false },
        { id: 3, text:  "No restrictions apply", isCorrect: false },
      ],
    },
    {
      text: "An octagon shaped sign means:",
      options: [
        { id: 0, text: "Railroad crossing", isCorrect: false },
        { id: 1, text: "Stop", isCorrect: true },
        { id: 2, text: "Yield", isCorrect: false },
        { id: 3, text: "Slow down", isCorrect: false },
      ],
    },
    {
      text: "Who is responsible for all passengers under 18 years of age?",
      options: [
        { id: 0, text: "The Passengers", isCorrect: false },
        { id: 1, text: "the Owner of the car ", isCorrect: false },
        { id: 2, text: "The Driver", isCorrect: true },
        { id: 3, text: "None of the above", isCorrect: false },
      ],
    },
  ];
  const optionCLicked = (isCorrect)=>{
    if(isCorrect==true){
      setScore(score+1);
    }
    if(currentQ+1<questions.length){
      setcurrentQ(currentQ+1);
    }
    else{
      setShowResults(true);
    }
  
  }
  const restartGame = () =>{
    setScore(0);
    setShowResults(false);
    setcurrentQ(0);
  }
  return (
    <div className="App">
      <h1> QuizGo</h1>
      <h2> Current Score:{score}</h2>

      {showResults ? ( <div className='final-res'>
        <h1>Final Results</h1>
        <h2> {score} out of {questions.length} correct - ({(score/questions.length)*100}%)
        </h2>
        <button onClick={()=>restartGame()}>Restart Quiz</button>
      </div>):(

      <div className ='question-card'>
        <h2> Question {currentQ+1} out of {questions.length}</h2>
        <h3 className = 'question-text'> {questions[currentQ].text}</h3>
        <ul>
          {questions[currentQ].options.map((option)=>{
            return (
              <li onClick={()=> optionCLicked(option.isCorrect)} key={option.id}>{option.text}</li>
            );
          })}
        </ul>
      </div>
      )}

     
      
    </div>
  );
}

export default App;
