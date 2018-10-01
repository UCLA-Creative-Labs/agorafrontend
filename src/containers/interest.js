import React from "react";

import Form from "../components/Form_V2";
import { FormItemTypes } from "../types/formItem";

class Interest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
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
        id: "interests",
        type: FormItemTypes.CHECKBOX,
        title: "What are your interests",
        options: ["UI/UX Design", "Web Development", "Art", "Engineering"]
      },
      {
        id: "meeting",
        type: FormItemTypes.BOOL,
        title: "Are you coming to our first meeting?"
      }
    ];
    return (
      <Form
        items={items}
        title="Interest Form"
        description="thanks for visiting!  Fill this out and come to our first meeting!"
      />
    );
  }
}

export default Interest;
