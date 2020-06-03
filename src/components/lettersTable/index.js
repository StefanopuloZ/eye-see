import React from 'react';
import PropTypes from 'prop-types';
import './letters-table.scss';

const LettersTable = props => {
  const { mappedLetters } = props;

  const table = Object.keys(mappedLetters).map(key => {
    return (
      <div
        className={`lt-letters-wrapper__letter lt-letters-wrapper__letter--${mappedLetters[key].status}`}
        key={key}
      >
        <span>
          {mappedLetters[key].letter} ({mappedLetters[key].number})
        </span>
      </div>
    );
  });

  return (
    <div className="lt-letters-wrapper">
      {table}
    </div>
  );
};

LettersTable.propTypes = {
  mappedLetters: PropTypes.object.isRequired,
};

LettersTable.defaultProps = {};

export default LettersTable;
