import { useState } from 'react';
import catImage from '../assets/images/cat.svg';
import '../styles/animations.css';

function DancingCat() {
  const [isAnimating, setIsAnimating] = useState(true);

  const toggleAnimation = () => {
    setIsAnimating(!isAnimating);
  };

  return (
    <div className="dancing-cat-container">
      <h1 className="title">Dancing Cat</h1>
      <div className="cat-wrapper">
        <img
          src={catImage}
          alt="Dancing Cat"
          className={`cat ${isAnimating ? 'dancing' : ''}`}
        />
      </div>
      <button
        className="control-button"
        onClick={toggleAnimation}
      >
        {isAnimating ? 'Stop Dancing' : 'Start Dancing'}
      </button>
      <p className="subtitle">
        {isAnimating ? '🎵 The cat is dancing! 🎵' : '😴 The cat is resting...'}
      </p>
    </div>
  );
}

export default DancingCat;
