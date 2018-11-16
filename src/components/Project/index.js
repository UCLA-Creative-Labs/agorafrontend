import React from "react";

const Project = props => (
  <div className="project">
    {props.img && props.alt && <img src={props.img} alt={props.alt} />}
    <div className="body">
      {props.title && (
        <h1 className="sentinel-secondary white">{props.title}</h1>
      )}
      {props.description && (
        <p className="lightgray untitled-secondary">{props.description}</p>
      )}
      {props.link && (
        <a target="_blank" href={props.link}>
          Link
        </a>
      )}
    </div>
  </div>
);

export default Project;
