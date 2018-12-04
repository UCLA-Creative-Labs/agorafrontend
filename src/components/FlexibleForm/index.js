import React from "react";

import Form from "../Form_V2";
import { FormItemTypes } from "../../types/formItem";
import { createApplication } from "../../actions/applications";
import { connect } from "react-redux";

class FlexibleForm extends React.Component {
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
        items={this.props.items}
        title={this.props.title}
        description={this.props.description}
        createStatus={this.props.createStatus}
        onSubmit={this.onSubmitForm}
      />
    );
  }
}

const mapStateToProps = state => ({
  createStatus: state.applications.createStatus
});

const mapDispatchToProps = dispatch => ({
  createApplication: payload => dispatch(createApplication(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ApplyProjectMember);
