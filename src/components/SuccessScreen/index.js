import React from "react";

const SuccessScreen = props => (
  <div className="success-screen">
    <div className="success-screen-block">
      <h1 className="untitled-primary black">{props.text}</h1>
    </div>
  </div>
);

export default SuccessScreen;
