import React from 'react';

const Card = props => (
  <div className="card">
    {props.img && props.alt && (
      <img src={props.img} alt={props.alt} />
    )}
    <div className="body">
      {props.title && (
        <h1>{props.title}</h1>
      )}
      {props.text && (
        <p>{props.text}</p>
      )}
    </div>
  </div>
);

export default Card;
