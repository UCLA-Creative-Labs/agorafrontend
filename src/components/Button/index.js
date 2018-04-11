import React from "react";

const Button = props => (
  <div>
    <button className={`btn btn-${props.color}`} onClick={props.onClick}>
      <span>{props.label}</span>
    </button>
  </div>
);

export default Button;
