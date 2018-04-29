import React from 'react';

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const aboutStyle = {
      margin: '4rem',
    };

    return (
      <div style={aboutStyle}>
        <h1>about</h1>
      </div>
    );
  }
}

export default About;
