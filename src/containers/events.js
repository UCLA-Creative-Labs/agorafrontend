import * as React from "react";
import linkState from "linkstate";
import styled from "react-emotion";

const Container = styled("div")`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

class Events extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temp: ""
    };
  }

  render() {
    return <Container>List of Events</Container>;
  }
}

export default Events;
