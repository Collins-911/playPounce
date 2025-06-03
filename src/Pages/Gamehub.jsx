import '../css/gamehub.css';
import { useNavigate } from 'react-router-dom';

export default function Gamehub() {
  const navigate = useNavigate();

  const quiz = () => {
    navigate("/quiz");
  };

  const games = [
    {
      title: "Tik-Tak-Toe",
      onClick: null
    },
    {
      title: "Quiz?",
      onClick: quiz
    },
    {
      title: "Super Mario",
      onClick: null
    },
  ];

  return (
    <div className="containerGamehub">
      <h1>Welcome <span>PS38</span></h1>
      <div className="Gamehubflex">
        {games.map(({ title, onClick }, i) => (
          <div className="item" key={i}>
            <h2>{title}</h2>
            <button onClick={onClick} disabled={!onClick}>Play</button>
          </div>
        ))}
      </div>
    </div>
  );
}
