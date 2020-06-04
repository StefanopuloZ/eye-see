export const random = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const letters = 'abcdefghijklmnopqrstuvwxyz'.split('');

export const makeNumbersArray = () => {
  const numbersArray = [];
  for (let i = 0; i < 26; i++) {
    numbersArray.push({ letter: letters[i], number: i + 1 });
  }
  return numbersArray;
};

export const makeLettersMap = numbersArray => {
  const mappedLetters = {};
  numbersArray.map(number => {
    mappedLetters[number.letter] = {
      number: number.number,
      letter: number.letter,
      status: 'none',
    };
  });
  return mappedLetters;
};

export const choseRandomNumber = array => {
  let newArray = JSON.parse(JSON.stringify(array));
  const randomNumber = newArray.splice(random(0, newArray.length - 1), 1)[0];

  return { randomNumber, newArray };
};
