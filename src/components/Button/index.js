import React from "react";
import PropTypes from "prop-types";

const Button = props => {
  let className = `btn btn-${props.color}`;
  if (props.className != null) {
    className += " " + props.className;
  }
  return (
    <div>
      <button className={className} onClick={props.onClick} style={props.style}>
        <span>{props.label}</span>
      </button>
    </div>
  );
};

Button.propTypes = {
  color: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  // Use this to pass custom styling classes
  className: PropTypes.string,
  style: PropTypes.string
};

export default Button;
