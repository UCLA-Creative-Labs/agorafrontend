import React from "react";
import { Link } from "react-router-dom";

const linkStyling = { display: "block" };

const FailedScreen = props => (
  <div className="failed-screen">
    <div className="failed-screen-block">
      <h1 className="untitled-primary black">{props.text}</h1>
      {props.link != null ? (
        <Link
          to={props.link}
          className="untitled-secondary gray"
          style={linkStyling}
        >
          {props.linkText}
        </Link>
      ) : null}
    </div>
  </div>
);

export default FailedScreen;
