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
      {// some projects have multiple lines for their desired section so in that case its an array
      props.desired != null &&
        props.desired instanceof Array &&
        props.desired.map((desiredItem, index) => (
          <p key={index} className="lightgray untitled-secondary">
            {desiredItem}
          </p>
        ))}
      {props.desired && !(props.desired instanceof Array) && (
        <p className="lightgray untitled-secondary">{props.desired}</p>
      )}
    </div>
  </div>
);

export default Project;
