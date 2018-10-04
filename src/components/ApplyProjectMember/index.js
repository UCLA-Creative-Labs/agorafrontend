import React from "react";

import Form from "../Form_V2";
import { FormItemTypes } from "../../types/formItem";
import { createApplication } from "../../actions/applications";
import { connect } from "react-redux";

import { CURRENT_PROJECTS } from "../../config/config";

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
    const items = [
      {
        id: "name",
        type: FormItemTypes.SHORT_RESPONSE,
        title: "Name",
        required: true
      },
      {
        id: "email",
        type: FormItemTypes.SHORT_RESPONSE,
        title: "Email",
        required: true
      },
      {
        id: "year",
        type: FormItemTypes.CHECKBOX,
        title: "What year are you?",
        options: ["1", "2", "3", "4"]
      },
      {
        id: "past_project",
        type: FormItemTypes.LONG_RESPONSE,
        title:
          "Tell us about a project you've worked on. What were some challenges you faced and how did you overcome them?",
        required: true
      },
      {
        id: "first_choice_project",
        type: FormItemTypes.DROPDOWN,
        title: "Which project is your first choice?",
        options: CURRENT_PROJECTS.map(project => project.title),
        required: true
      },
      {
        id: "second_choice_project",
        type: FormItemTypes.DROPDOWN,
        title: "Second choice?",
        options: CURRENT_PROJECTS.map(project => project.title),
        required: true
      },
      {
        id: "third_choice_project",
        type: FormItemTypes.DROPDOWN,
        title: "Third choice?",
        options: CURRENT_PROJECTS.map(project => project.title),
        required: true
      },
      {
        id: "why_first_choice",
        type: FormItemTypes.LONG_RESPONSE,
        title:
          "What skills make you a good fit for your first choice? How would you use them to make the project better?",
        required: true
      },
      {
        id: "why_second_choice",
        type: FormItemTypes.LONG_RESPONSE,
        title:
          "What skills make you a good fit for your second choice? How would you use them to make the project better?",
        required: false
      },
      {
        id: "why_third_choice",
        type: FormItemTypes.LONG_RESPONSE,
        title:
          "What skills make you a good fit for your third choice? How would you use them to make the project better?",
        required: false
      },
      {
        id: "see_creative_labs",
        type: FormItemTypes.LONG_RESPONSE,
        title: "What would you like to to see from Creative Labs?",
        required: true
      },
      {
        id: "links",
        type: FormItemTypes.LONG_RESPONSE,
        title: "Time to brag! Drop us some links.",
        required: false
      },
      {
        id: "creativity",
        type: FormItemTypes.LONG_RESPONSE,
        title: "Solve for x.",
        required: false
      }
    ];

    return (
      <Form
        items={items}
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
