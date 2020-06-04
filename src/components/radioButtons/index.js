import React from 'react';
import PropTypes from 'prop-types';
import './radio-buttons.scss';

const RadioButtons = props => {
  const { onChange, difficulty, disabled } = props;

  return (
    <form className="lt-radio-buttons">
      <div>
        <label>
          <input
            type="radio"
            value="easy"
            onChange={onChange}
            checked={difficulty === 'easy'}
            disabled={disabled}
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
            disabled={disabled}
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
            disabled={disabled}
          />
          Hard
        </label>
      </div>
    </form>
  );
};

RadioButtons.propTypes = {
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

RadioButtons.defaultProps = {
  disabled: true,
};

export default RadioButtons;
