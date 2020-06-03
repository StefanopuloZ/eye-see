import React from 'react';
import PropTypes from 'prop-types';
import './radio-buttons.scss';

const RadioButtons = props => {
  const { onChange, difficulty } = props;

  return (
    <form className="lt-radio-buttons-wrapper">
      <div>
        <label>
          <input
            type="radio"
            value="easy"
            onChange={onChange}
            checked={difficulty === 'easy'}
          />
          Easy
        </label>
      </div>
      <div className="radio">
        <label>
          <input
            type="radio"
            value="medium"
            onChange={onChange}
            checked={difficulty === 'medium'}
          />
          Medium
        </label>
      </div>
      <div className="radio">
        <label>
          <input
            type="radio"
            value="hard"
            onChange={onChange}
            checked={difficulty === 'hard'}
          />
          Hard
        </label>
      </div>
    </form>
  );
};

RadioButtons.propTypes = {
  onChange: PropTypes.func.isRequired,
};

RadioButtons.defaultProps = {};

export default RadioButtons;
