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
        <div>
          <Link className="sentinel-primary black navbar-logo" to="/">
            Creative Labs.
          </Link>
        </div>
        <div className="navbar-links">
          <Link to="/apply" style={linkStyling}>
            <div className="untitled-primary lightgray navbar-link">Apply</div>
          </Link>
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
        </div>
      </div>
    );
  }
}

export default NavBar;
