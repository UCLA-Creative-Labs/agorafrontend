import React from "react";

import Form from "../Form_V2";
import { FormItemTypes } from "../../types/formItem";
import { createApplication } from "../../actions/applications";
import { connect } from "react-redux";

import { CURRENT_PROJECTS, PROJECT_MEMBER_FORM } from "../../config/config";

class ApplyProjectMember extends React.Component {
  constructor(props) {
    super(props);

    this.onSubmitForm = this.onSubmitForm.bind(this);
  }

  onSubmitForm(userInput) {
    // do some stuff to userInput
    const payload = userInput;
    this.props.createApplication(payload);
  }

  render() {
    return (
      <Form
        items={PROJECT_MEMBER_FORM}
        title="So you want to work on a project, huh?"
        description="Tell us a bit about yourself."
        onSubmit={this.onSubmitForm}
      />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  createApplication: payload => dispatch(createApplication(payload))
});

export default connect(
  null,
  mapDispatchToProps
)(ApplyProjectMember);
