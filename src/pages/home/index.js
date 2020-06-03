import React, { useState, useEffect, useRef } from 'react';
import './style.scss';

const Home = props => {
  const [countNumber, setCountNumber] = useState(0);
  const [gameInProgress, setGameInProgress] = useState(false);

  const timer = useRef(null);

  useEffect(() => {
    if (gameInProgress) {
      startTimer();
    }
  }, [countNumber]);

  const handleKeyPress = e => {
    const key = e.key;
    console.log(key);

    if (key === 'a') {
      console.log('cleared!');
      clearTimeout(timer.current);
    }

    setCountNumber(countNumber + 1);
  };

  const startTimer = () => {
    console.log(countNumber);

    if (countNumber < 3) {
      timer.current = setTimeout(() => {
        const newCount = countNumber + 1;
        setCountNumber(countNumber + 1);
        console.log('time expired newCount:', newCount, ' / old:', countNumber);
      }, 2000);
    } else {
      console.log('END');
    }
  };

  const startGame = () => {
    console.log('start');
    setCountNumber(0);
    setGameInProgress(true);
    startTimer();
  };

  console.log('rerender');

  return (
    <div className="test" tabIndex={0} onKeyPress={handleKeyPress}>
      <h1>game / count: {countNumber}</h1>
      <button onClick={startGame}>Start</button>
    </div>
  );
};

export default Home;
