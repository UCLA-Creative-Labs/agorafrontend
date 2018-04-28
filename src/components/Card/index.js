import React from 'react';

const Card = props => (
  <div className="card">
    <img src="https://www.gettyimages.ie/gi-resources/images/Homepage/Hero/UK/CMS_Creative_164657191_Kingfisher.jpg" alt="A Day in LA" />
    <div className="body">
      <h1>{props.project.title}</h1>
      <p>{props.project.text}</p>
    </div>
  </div>
);

export default Card;
