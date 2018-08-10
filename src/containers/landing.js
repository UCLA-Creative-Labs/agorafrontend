import React from 'react';

import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import AdminClient from '../api/admin_client/index'

import Button from '../components/Button';

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.createAdmin = this.createAdmin.bind(this);
  }

  createAdmin() {
    // for testing

    const payload = {
      firstName: "the last",
      lastName: "boob",
      email: "boob29@boob.com",
      username: "blah70",
      password: "password"
    }

    AdminClient.getSingleton().createAdmin(payload)
      .then(response => {
        console.log('createAdmin', response);        
      })
      .catch(error => {
        console.log('createAdmin failed', error);
      })
  }

  render() {
    const { loggedIn } = this.props;

    const onClickView = loggedIn
      ? () => this.props.navigate('/admin')
      : () => this.props.navigate('/projects');

    return (
      <div className="display">
        <Button label="see projects" color="primary" onClick={onClickView} />

        <Button label="create an admin" color="primary" onClick={this.createAdmin} />
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
