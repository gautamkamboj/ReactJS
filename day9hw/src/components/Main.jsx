import { useState,useEffect } from "react";
const Main = ()=>{
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(5);

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    try {
      const response = await fetch('https://opentdb.com/api.php?amount=10&type=multiple');
      const data = await response.json();
      setQuestions(data.results);
    } catch (error) {
      console.error('Error fetching questions:', error);
    }
  };

  const handleAnswerClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    setTimer(5);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      } else {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setTimer(5);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [timer, currentQuestionIndex]);

  const currentQuestion = questions[currentQuestionIndex];
 
  
  if (!currentQuestion) {
    return (
      <div className="quiz">
        <h1>Quiz App</h1>
        <h2>Quiz Completed!</h2>
        <p>Your score: {score}</p>
      </div>
    );
  }

  return (
    <div className="quiz">
        <h1>Quiz App</h1>
      <h2>Question {currentQuestionIndex + 1}</h2>
      <p>{currentQuestion.question}</p>
      
      <div className="answers">
      <ul>{currentQuestion.incorrect_answers.map((answer, index) => (
            
                <li key={index} ><button onClick={() => handleAnswerClick(false)}>{answer}</button></li>
            
          
        ))}
        
        <li><button onClick={() => handleAnswerClick(true)}>{currentQuestion.correct_answer}</button></li>
        </ul>
      </div>
      <div className="timer">Time left: {timer}s</div>
      <button onClick={()=>handleAnswerClick(false)}>skip question</button>
      
    </div>
  );


}

export default Main;