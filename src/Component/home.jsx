import { useNavigate } from "react-router-dom";
export default function Home() {

   const navigate = useNavigate();

  const play = () => {
    navigate("/entry"); 
  };

  return (
    <>
      <div className="containerHome">
        <div className="header">
          <h1>
            <span className="F">F</span>
            <span className="U">U</span>
            <span className="N">N</span>
            <span className="G">G</span>
            <span className="R">R</span>
            <span className="I">I</span>
            <span className="D">D</span>
          </h1>
        </div>

        <div className="play-button" onClick={play}>
          <div className="play-icon"></div>
        </div>
      </div>
    </>
  );
}
