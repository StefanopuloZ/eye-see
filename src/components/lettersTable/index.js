import React from 'react';
import PropTypes from 'prop-types';
import './letters-table.scss';

const LettersTable = props => {
  const { mappedLetters, isGameInProgress } = props;

  const table = Object.keys(mappedLetters).map(key => {
    return (
      <div
        className={`lt-letters__letter lt-letters__letter--${mappedLetters[key].status}`}
        key={key}
      >
        <span>
          {mappedLetters[key].letter} ({mappedLetters[key].number})
        </span>
      </div>
    );
  });

  return (
    <div className={`lt-letters ${isGameInProgress && 'lt-letters--active'}`}>
      {table}
    </div>
  );
};

LettersTable.propTypes = {
  mappedLetters: PropTypes.object.isRequired,
  isGameInProgress: PropTypes.bool
};

LettersTable.defaultProps = {
  isGameInProgress: false,
};

export default LettersTable;
