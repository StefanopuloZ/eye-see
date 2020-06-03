import React from 'react';
import PropTypes from 'prop-types';
import './score.scss';

const Score = props => {
  const { mappedLetters } = props;

  let hit = 0;
  let miss = 0;
  let left = 0;

  Object.keys(mappedLetters).map(key => {
    if (mappedLetters[key].status === 'hit') {
      ++hit;
    } else if (mappedLetters[key].status === 'miss') {
      ++miss;
    } else if (mappedLetters[key].status === 'none') {
      ++left;
    }
  });

  return (
    <div className="lt-score-wrapper">
      <div>Hit: {hit}</div>
      <div>Miss: {miss}</div>
      <div>Left: {left}</div>
    </div>
  );
};

Score.propTypes = {
  mappedLetters: PropTypes.object.isRequired,
};

Score.defaultProps = {};

export default Score;
