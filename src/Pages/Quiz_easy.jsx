import { useState } from "react";
import "../css/quizEasy.css";

export default function Quizeasy() {
  const [step, setStep] = useState(1);
  const [score, setScore] = useState(0);
  const [tries, setTries] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [selectedAnswer, setSelectedAnswer] = useState("");

  function handleAnswer(answer) {
    setTries(tries + 1);
    setSelectedAnswer(answer);

    if (step === 1) {
      if (answer === "Paris") {
        setScore(score + 1);
        setFeedback("correct");
        setTimeout(() => {
          setStep(2);
          resetFeedback();
        }, 1000);
      } else {
        setFeedback("wrong");
      }
    } else if (step === 2) {
      if (answer === "8") {
        setScore(score + 1);
        setFeedback("correct");
        setTimeout(() => {
          setStep(3);
          resetFeedback();
        }, 1000);
      } else {
        setFeedback("wrong");
      }
    } else if (step === 3) {
      if (answer === "Blue") {
        setScore(score + 1);
        setFeedback("correct");
        setTimeout(() => {
          setStep(4);
          resetFeedback();
        }, 1000);
      } else {
        setFeedback("wrong");
      }
    }
  }

  function resetFeedback() {
    setFeedback("");
    setSelectedAnswer("");
  }

  function getButtonClass(option) {
    if (selectedAnswer !== option) return "quiz-button";
    if (feedback === "correct") return "quiz-button correct";
    if (feedback === "wrong") return "quiz-button wrong";
    return "quiz-button";
  }

  return (
    <div className="containerQuizeasy">
      {step < 4 && <div className="score-box">Score: {score} | Tries: {tries}</div>}

      {step === 1 && (
        <div className="quiz-box">
          <h2>Question 1</h2>
          <p>What is the capital of France?</p>
          <button className={getButtonClass("Berlin")} onClick={() => handleAnswer("Berlin")}>Berlin</button>
          <button className={getButtonClass("Madrid")} onClick={() => handleAnswer("Madrid")}>Madrid</button>
          <button className={getButtonClass("Paris")} onClick={() => handleAnswer("Paris")}>Paris</button>
          <button className={getButtonClass("Rome")} onClick={() => handleAnswer("Rome")}>Rome</button>
        </div>
      )}

      {step === 2 && (
        <div className="quiz-box">
          <h2>Question 2</h2>
          <p>What is 5 + 3?</p>
          <button className={getButtonClass("5")} onClick={() => handleAnswer("5")}>5</button>
          <button className={getButtonClass("8")} onClick={() => handleAnswer("8")}>8</button>
          <button className={getButtonClass("9")} onClick={() => handleAnswer("9")}>9</button>
          <button className={getButtonClass("7")} onClick={() => handleAnswer("7")}>7</button>
        </div>
      )}

      {step === 3 && (
        <div className="quiz-box">
          <h2>Question 3</h2>
          <p>What is the color of the sky?</p>
          <button className={getButtonClass("Blue")} onClick={() => handleAnswer("Blue")}>Blue</button>
          <button className={getButtonClass("Green")} onClick={() => handleAnswer("Green")}>Green</button>
          <button className={getButtonClass("Red")} onClick={() => handleAnswer("Red")}>Red</button>
          <button className={getButtonClass("Purple")} onClick={() => handleAnswer("Purple")}>Purple</button>
        </div>
      )}

      {step === 4 && (
        <div className="result-box">
          <h2>Quiz Finished!</h2>
          <p>Your Score: {score} / 3</p>
          <p>Total Tries: {tries}</p>
        </div>
      )}
    </div>
  );
}
