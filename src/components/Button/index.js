import React, { PropTypes } from 'react';

const Button = props => (
  <div>
    <button className={`btn btn-${props.color}`} onClick={props.onClick}>
      <span>{props.label}</span>
    </button>
  </div>
);

Button.propTypes = {
  color: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

export default Button;
