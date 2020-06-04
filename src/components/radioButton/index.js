import React from 'react';
import './radio-button.scss';

const RadioButton = props => {
    const {id, label, onChange, isSelected, disabled, value} = props;

  return (
    <div className={`lt-radio-button ${disabled && 'lt-radio-button--disabled'}`}>
      <input
        id={id}
        onChange={onChange}
        value={value}
        type="radio"
        checked={isSelected}
        disabled={disabled}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default RadioButton;
