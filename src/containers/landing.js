import React from 'react';

import { push } from 'react-router-redux';
import { connect } from 'react-redux';

import AdminClient from '../api/admin_client/index'
import { fetchApplications } from '../actions/applications';

import Button from '../components/Button';

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.createAdmin = this.createAdmin.bind(this);
    this.fetchApplications = this.fetchApplications.bind(this);
  }

  createAdmin() {
    // for testing

    const payload = {
      firstName: "the last",
      lastName: "boob",
      email: "boob40@boob.com",
      username: "blah72",
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

  fetchApplications() {
    this.props.fetchApplications({});
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
        <Button label="fetch applications" color="primary" onClick={this.fetchApplications} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state.user,
});

const mapDispatchToProps = (dispatch, payload) => {
  return {
    navigate: link => push(link),
    fetchApplications: payload => dispatch(fetchApplications(payload))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
