import React from "react";
import { Link } from "react-router-dom";

const linkStyling = { textDecoration: "none", display: "block" };

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="navbar">
        <div className="sentinel-primary black navbar-logo">
          <Link className="black" to="/">
            Creative Labs.
          </Link>
        </div>
        {/* <div className="navbar-links">
          <Link to="/apply" style={linkStyling}>
            <div className="untitled-primary lightgray navbar-link">Apply</div>
          </Link>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSf1DHxnf2xVKCwbXJ57sLww5WXZ1ijvAEdVhEUF7KwZu_OqIQ/viewform">
            <div className="untitled-primary lightgray navbar-link">Apply</div>
          </a>
          <Link to="/projects" style={linkStyling}>
            <div className="untitled-primary lightgray navbar-link">
              Projects
            </div>
          </Link>
          <Link to="/contact" style={linkStyling}>
            <div className="untitled-primary lightgray navbar-link">
              Contact
            </div>
          </Link>
        </div> */}
      </div>
    );
  }
}

export default NavBar;
