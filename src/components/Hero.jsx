import { Link } from 'react-router-dom';
import '../css/Hero.css';

function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1>Welcome to My Portfolio</h1>
        <p></p>
        <Link to="/about">
          <button>Enter</button>
        </Link>  
      </div>
    </div>
  );
}

export default Hero;