import React from 'react';

const Header = props => (
  <div className="hdr">
    {props.links.map((link, i) => (
      <div className="link">
        <p key={i}>{link.name}</p>
      </div>
    ))}
  </div>
);

export default Header;
