import React from "react";
import styled from "react-emotion";
import { Link } from "react-router-dom";
//import Landing from "./landing";

// emotion styles
const Div = styled("div")`
  text-align: center;
`;

const H1 = styled("h1")`
  font-size: 5rem;
  padding: 30px;
`;

const H2 = styled("h2")`
  width: 1000px;
  max-width: 80%;
  margin: auto;
  font-size: 2rem;
`;

const ApplyDiv = styled("div")`
  font-size: 3rem;
  position: relative;
  padding: 0;
  transform-origin: left;
  display: inline-block;

  &::before {
    content: "";
    height: 1px;
    background-color: $lightgray;
    width: 100%;
    transform: scaleX(0);
    transition: all 0.25s ease;
    position: absolute;
    bottom: 0;
    transform-origin: left;
  }

  &:hover {
    cursor: pointer;
    color: $black;
  }

  &:hover::before {
    transform: scaleX(1);
    background-color: $black;
  }
`;

// end of styles

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    /*
    const landingContainerStyle = {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '400px',
    };

    const homeStyle = {
      margin: '50px',
    };

    return (
      <div style={homeStyle}>
        <h1>home</h1>
        <div style={landingContainerStyle}>
          <Landing />
        </div>
      </div>
    );
    */

    return (
      <Div>
        <H2 className="sentinel-secondary black">Creative Labs.</H2>
        <H1 className="sentinel-secondary black">Put down your piece.</H1>
        <Link to="/apply">
          <ApplyDiv className="sentinel-secondary black navbar-link">
            Apply now.
          </ApplyDiv>
        </Link>
      </Div>
    );
  }
}

export default Home;
