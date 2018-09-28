import React from "react";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="sentinel-primary black navbar-logo">Creative Labs.</div>
        <div className="navbar-links">
          <div className="untitled-primary gray navbar-link">Apply</div>
          <div className="untitled-primary gray navbar-link">Projects</div>
          <div className="untitled-primary gray navbar-link">Contact</div>
        </div>
      </div>
    );
  }
}

export default NavBar;
