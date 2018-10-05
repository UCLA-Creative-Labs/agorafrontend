import React from "react";
import { Link } from "react-router-dom";

const linkStyling = { display: "block" };

class FailedScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  reload() {
    window.location.reload();
  }

  render() {
    return (
      <div className="failed-screen">
        <div
          className="failed-screen-block"
          style={{
            paddingLeft: "15vw",
            paddingRight: "15vw",
            textAlign: "center"
          }}
        >
          <h1 className="untitled-primary black">{this.props.text}</h1>
          {this.props.link != null ? (
            <Link
              to={this.props.link}
              className="untitled-secondary gray"
              style={linkStyling}
              onClick={this.reload}
            >
              {this.props.linkText}
            </Link>
          ) : null}
        </div>
      </div>
    );
  }
}

export default FailedScreen;
