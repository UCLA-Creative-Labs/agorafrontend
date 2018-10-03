import React from "react";

import Form from "../Form_V2";
import { FormItemTypes } from "../../types/formItem";
import ApplicationClient from "../../api/application_client";

class ApplyProjectMember extends React.Component {
  constructor(props) {
    super(props);

    this.onSubmitForm = this.onSubmitForm.bind(this);
  }

  onSubmitForm(userInput) {
    // do some stuff to userInput
    const payload = userInput;

    ApplicationClient.getSingleton().createApplication(payload);
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
        required: false
      },
      {
        id: "year",
        type: FormItemTypes.CHECKBOX,
        title: "What year are you?",
        options: ["1", "2", "3", "4"]
      },
      {
        id: "why_CL",
        type: FormItemTypes.LONG_RESPONSE,
        title: "Why are you interested in joining Creative Labs?",
        required: true
      },
      {
        id: "attend_GM",
        type: FormItemTypes.CHECKBOX,
        title: "Did you attend the Fall GM?",
        options: ["Yes", "No"],
        required: true
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

export default ApplyProjectMember;
