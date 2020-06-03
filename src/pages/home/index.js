import React, { useState, useEffect, useRef } from 'react';
import './style.scss';
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
  const [numbersArray, setNumbersArray] = useState(makeNumbersArray());
  const [mappedLetters, setMappedLetters] = useState(
    makeLettersMap(makeNumbersArray())
  );
  const [randomNumber, setRandomNumber] = useState(null);

  const timer = useRef(null);
  const timerOn = useRef(false);

  console.log(mappedLetters);

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

  const handleKeyPress = e => {
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
      console.log('END');
      setGameInProgress(false);
    }
  };

  const startGame = () => {
    console.log('start');
    setPressedLetter('');
    setCountNumber(0);
    setGameInProgress(true);
    startTimer();
  };

  return (
    <div className="test" tabIndex={0} onKeyPress={handleKeyPress}>
      <RadioButtons difficulty={difficulty} onChange={handleRadioChange}/>
      <h1>number: {randomNumber && randomNumber.number}</h1>
      <button onClick={startGame}>Start</button>
      <input readOnly value={pressedLetter} />
      <Score mappedLetters={mappedLetters} />
      <LettersTable mappedLetters={mappedLetters} />
    </div>
  );
};

export default Home;
