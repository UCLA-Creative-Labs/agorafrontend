import React from 'react';

const Header = props => (
  <div className="hdr">
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
);

export default Header;
