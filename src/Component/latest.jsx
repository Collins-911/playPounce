import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import '../css/latest.css';

export default function Latest() {
  return (
    <div className="latest">
      <h2>
        Marvel's Spider-Man<br />Remastered
      </h2>

      <p>
        Red Dead Redemption 2 is a 2018 action-adventure game<br />
        developed and published by Rockstar Games. The game is the third<br />
        entry in the Red Dead series and
      </p>

      <button className="book-now">Book Now</button>

      <button className="left-btn">
        <FaChevronLeft />
      </button>

      <button className="right-btn">
        <FaChevronRight />
      </button>
    </div>
  );
}
