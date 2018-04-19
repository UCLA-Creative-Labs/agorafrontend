import React from 'react';

import Display from './display';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>home</h1>
        <Display />
      </div>
    );
  }
}

export default Home;
