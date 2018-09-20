import React from 'react';

import InterestForm from '../components/InterestForm';

class Interest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <InterestForm title="Interest Form" description="thanks for visiting!  Fill this out and come to our first meeting!" />
    );
  }
}

export default Interest;
