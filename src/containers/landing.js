import React from "react";

import { push } from "react-router-redux";
import { connect } from "react-redux";

import AdminClient from "../api/admin_client/index";
import { fetchApplications, createApplication } from "../actions/applications";
import { selectors } from "../reducers/rootReducer";
import { CreateStatus } from "../api/constants";

import Button from "../components/Button";

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.createAdmin = this.createAdmin.bind(this);
    this.fetchApplications = this.fetchApplications.bind(this);
    this.createApp = this.createApp.bind(this);
  }

  createAdmin() {
    // for testing

    const payload = {
      firstName: "the last",
      lastName: "boob",
      email: "boob40@boob.com",
      username: "blah72",
      password: "password"
    };

    AdminClient.getSingleton()
      .createAdmin(payload)
      .then(response => {
        console.log("createAdmin", response);
      })
      .catch(error => {
        console.log("createAdmin failed", error);
      });
  }

  createApp() {
    const payload = {
      lastName: "swag money",
      firstName: "michael",
      email: "test@email.com",
      response: "booty",
      firstChoice: "88",
      secondChoice: "89",
      thirdChoice: "yeet"
    };

    this.props.createApplication(payload);
  }

  fetchApplications() {
    this.props.fetchApplications({});
  }

  render() {
    const { loggedIn, showLoadingIcon } = this.props;

    const onClickView = loggedIn
      ? () => this.props.navigate("/admin")
      : () => this.props.navigate("/projects");

    return (
      <div className="display">
        <Button label="see projects" color="primary" onClick={onClickView} />

        <Button
          label="create an admin"
          color="primary"
          onClick={this.createAdmin}
        />
        <Button
          label="fetch applications"
          color="primary"
          onClick={this.fetchApplications}
        />
        <Button
          label="create application"
          color="primary"
          onClick={this.createApp}
        />

        {showLoadingIcon && (
          <Button
            label="FAKE LOADING ICON"
            color="primary"
            onClick={() => {}}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const applications = selectors.applications(state);

  return {
    showLoadingIcon: applications.getCreateStatus() === CreateStatus.CREATING
  };
};

const mapDispatchToProps = (dispatch, payload) => {
  return {
    navigate: link => push(link),
    fetchApplications: payload => dispatch(fetchApplications(payload)),
    createApplication: payload => dispatch(createApplication(payload))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Landing);
