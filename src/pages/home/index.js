import React, { useState, useEffect, useRef } from 'react';
import './style.scss';
import {
  lettersMap,
  makeNumbersArray,
  choseRandomNumber,
} from '../../logic-functions';

const Home = props => {
  const [countNumber, setCountNumber] = useState(0);
  const [gameInProgress, setGameInProgress] = useState(false);
  const [pressedLetter, setPressedLetter] = useState(null);

  const timer = useRef(null);

  console.log(
    lettersMap,
    makeNumbersArray(),
    choseRandomNumber(makeNumbersArray())
  );

  useEffect(() => {
    if (gameInProgress) {
      startTimer();
    }
  }, [countNumber]);

  const handleKeyPress = e => {
    const key = e.key;
    console.log(key);
    setPressedLetter(key);

    if (key === 'a') {
      console.log('correct!');
    }

    clearTimeout(timer.current);
    setCountNumber(countNumber + 1);
    setTimeout(() => {
      setPressedLetter('');
    }, 200);
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
    setPressedLetter('');
    setCountNumber(0);
    setGameInProgress(true);
    startTimer();
  };

  console.log('rerender');

  return (
    <div className="test" tabIndex={0} onKeyPress={handleKeyPress}>
      <h1>game / count: {countNumber}</h1>
      <button onClick={startGame}>Start</button>
      <input value={pressedLetter} />
    </div>
  );
};

export default Home;
