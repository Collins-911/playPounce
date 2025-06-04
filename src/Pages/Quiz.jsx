import '../css/quiz.css';
import { useNavigate } from 'react-router-dom';

export default function Quiz() {

  const navigate = useNavigate();
  const easy = () => {
    navigate("/quizEasy")
  }

  return (
    <div className="containerQuiz">
      <div className="headerQuiz">
        <h3>Quiz Time?</h3>
      </div>

      <div className="Quizflex">
        <div className="itemQuiz" onClick={easy}>
          <h2>Easy</h2>
        </div>
        <div className="itemQuiz">
          <h2>Hard</h2>
        </div>
        <div className="itemQuiz">
          <h2>Difficult</h2>
        </div>
      </div>
    </div>
  );
} 
