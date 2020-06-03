export const random = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const lettersMap = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7,
  h: 8,
  i: 9,
  j: 10,
  k: 11,
  l: 12,
  m: 13,
  n: 14,
  o: 15,
  p: 16,
  q: 17,
  r: 18,
  s: 19,
  t: 20,
  u: 21,
  v: 22,
  w: 23,
  x: 24,
  y: 25,
  z: 26,
};

export const makeNumbersArray = () => {
  const numbersArray = [];
  for (let i = 1; i <= 26; i++) {
    numbersArray.push(i);
  }
  return numbersArray;
};

export const choseRandomNumber = array => {
  let newArray = JSON.parse(JSON.stringify(array));
  const randomNumber = newArray.splice(random(0, newArray.length - 1), 1)[0];

  return { randomNumber, newArray };
};
