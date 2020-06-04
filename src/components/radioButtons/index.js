import React from 'react';
import PropTypes from 'prop-types';
import './radio-buttons.scss';
import RadioButton from '../radioButton';

const RadioButtons = props => {
  const { onChange, difficulty, disabled } = props;

  return (
    <form className="lt-radio-buttons">
      <RadioButton
        onChange={onChange}
        id="1"
        isSelected={difficulty === 'easy'}
        label="easy"
        value="easy"
        disabled={disabled}
      />
      <RadioButton
        onChange={onChange}
        id="2"
        isSelected={difficulty === 'medium'}
        label="medium"
        value="medium"
        disabled={disabled}
      />
      <RadioButton
        onChange={onChange}
        id="3"
        isSelected={difficulty === 'hard'}
        label="hard"
        value="hard"
        disabled={disabled}
      />
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
