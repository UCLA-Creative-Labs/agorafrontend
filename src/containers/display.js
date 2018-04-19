import React from 'react';

import Button from '../components/Button';

class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const onClickNull
      = () => {};

    return (
      <div className="display">
        <Button label="hello" color="primary" onClick={onClickNull} />
      </div>
    );
  }
}


export default Display;
