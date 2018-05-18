import React from 'react';

import Landing from './landing';
import SButton from '../components/Steven_Button/index';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
    };
  }

  handleClick() {
      this.setState({
        number: (this.state.number+1),
      });
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
        <div style={landingContainerStyle}>
          <SButton onClick={() => this.handleClick()} value={this.state.number}/>
        </div>
      </div>
    );
  }
}

export default Home;
