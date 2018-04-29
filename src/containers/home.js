import React from 'react';

import Landing from './landing';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
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
  }
}

export default Home;
