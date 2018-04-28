import React from 'react';

import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Button from '../components/Button';

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { loggedIn } = this.props;

    const onClickView = loggedIn
      ? () => this.props.navigate('/admin')
      : () => this.props.navigate('/projects');

    return (
      <div className="display">
        <Button label="see projects" color="primary" onClick={onClickView} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state.user,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      navigate: link => push(link),
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
