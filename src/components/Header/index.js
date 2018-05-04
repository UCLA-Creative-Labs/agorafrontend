import React from 'react';

const Header = props => (
  <div className="hdr">
    {props.title && (
      <h1 className="title">{props.title}</h1>
    )}
    <div className="links_container">
      {props.links.map((link, i) => (
        <div
          role="presentation"
          className="link"
          onClick={link.onClick}
          key={i}
        >
          <p>{link.name}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Header;
