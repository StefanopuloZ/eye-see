import React, { useState, useEffect, useRef } from 'react';
import './home.scss';
import {
  makeLettersMap,
  makeNumbersArray,
  choseRandomNumber,
} from '../../logic-functions';
import LettersTable from '../../components/lettersTable';
import Score from '../../components/score';
import RadioButtons from '../../components/radioButtons';

const difficultyMap = {
  easy: 5000,
  medium: 3500,
  hard: 2000,
};

const Home = props => {
  const [countNumber, setCountNumber] = useState(0);
  const [gameInProgress, setGameInProgress] = useState(false);
  const [pressedLetter, setPressedLetter] = useState('');
  const [difficulty, setDifficulty] = useState('medium');
  const [numbersArray, setNumbersArray] = useState([]);
  const [mappedLetters, setMappedLetters] = useState({});
  const [randomNumber, setRandomNumber] = useState(null);

  const timer = useRef(null);
  const timerOn = useRef(false);

  useEffect(() => {
    const newNumbersArray = makeNumbersArray();
    setNumbersArray(newNumbersArray);
    setMappedLetters(makeLettersMap(newNumbersArray));
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (gameInProgress && !timerOn.current) {
      const newMappedLetters = JSON.parse(JSON.stringify(mappedLetters));
      newMappedLetters[randomNumber.letter].status = 'miss';
      setMappedLetters(newMappedLetters);
    }

    if (gameInProgress) {
      startTimer();
    }
    // eslint-disable-next-line
  }, [countNumber]);

  const handleRadioChange = e => {
    setDifficulty(e.currentTarget.value);
  };

  const stopGame = () => {
    setGameInProgress(false);
    clearTimeout(timer.current);
    setNumbersArray(makeNumbersArray());
    setCountNumber(0);
  };

  const handleKeyPress = e => {
    if (!gameInProgress) {
      return;
    }
    const key = e.key.toLowerCase();
    const newMappedLetters = JSON.parse(JSON.stringify(mappedLetters));
    let isHit = 'miss';
    setPressedLetter(key);

    if (key === randomNumber.letter) {
      isHit = 'hit';
    }

    newMappedLetters[randomNumber.letter].status = isHit;

    setMappedLetters(newMappedLetters);

    clearTimeout(timer.current);
    setCountNumber(countNumber + 1);
    setTimeout(() => {
      setPressedLetter('');
    }, 200);
  };

  const startTimer = () => {
    timerOn.current = true;
    if (numbersArray.length > 0) {
      const randomResult = choseRandomNumber(numbersArray);
      setRandomNumber(randomResult.randomNumber);
      setNumbersArray(randomResult.newArray);

      timer.current = setTimeout(() => {
        timerOn.current = false;
        setCountNumber(countNumber + 1);
      }, difficultyMap[difficulty]);
    } else {
      setGameInProgress(false);
      setTimeout(() => {
        alert('Game Over');
        stopGame();
      }, 10);
    }
  };

  const handleButtonClick = () => {
    if (!gameInProgress) {
      setPressedLetter('');
      setCountNumber(0);
      setGameInProgress(true);
      setMappedLetters(makeLettersMap(numbersArray));
      startTimer();
    }

    if (gameInProgress) {
      stopGame();
    }
  };

  return (
    <div className="lt-home" tabIndex={0} onKeyPress={handleKeyPress}>
      <div className="lt-home__container">
        <h1 className="lt-home__title">ALPHABET REFLEX GAME</h1>
        <RadioButtons
          difficulty={difficulty}
          onChange={handleRadioChange}
          disabled={gameInProgress}
        />
        <div className="lt-home__score">
          <Score mappedLetters={mappedLetters} />
        </div>
        <div className="lt-home__mid-wrapper">
          <button className="lt-home__start-btn" onClick={handleButtonClick}>
            {gameInProgress ? 'Stop' : 'Start Game'}
          </button>
          <div className="lt-home__number">
            {randomNumber && randomNumber.number}
          </div>
          <input readOnly value={pressedLetter} placeholder="Input letter" />
        </div>
        <LettersTable mappedLetters={mappedLetters} isGameInProgress={gameInProgress} />
      </div>
    </div>
  );
};

export default Home;
