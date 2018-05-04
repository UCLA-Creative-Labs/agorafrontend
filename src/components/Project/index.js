import React from 'react';

const Project = props => (
  <div className="project">
    {props.img && props.alt && (
      <img src={props.img} alt={props.alt} />
    )}
    <div className="body">
      {props.title && (
        <h1>{props.title}</h1>
      )}
      {props.description && (
        <p>{props.description}</p>
      )}
    </div>
  </div>
);

export default Project;
