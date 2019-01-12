import React from "react";

const Project = props => (
  <div className="project">
    {props.img && props.alt && <img src={props.img} alt={props.alt} />}
    <div className="body">
      {props.title && (
        <h1 className="sentinel-secondary white">{props.title}</h1>
      )}
      {props.lead && (
        <p className="lightgray untitled-secondary">{props.lead}</p>
      )}
      {props.description && (
        <p className="lightgray untitled-secondary">{props.description}</p>
      )}
      {props.desired && (
        <p className="lightgray untitled-secondary">{props.desired}</p>
      )}
    </div>
  </div>
);

export default Project;
