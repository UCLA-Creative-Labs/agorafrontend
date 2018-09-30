import React from "react";

import Form from "../components/Form_V2";

class Interest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const entries = [
      {
        type: "short_resp",
        title: "Name",
        required: true
      },
      {
        type: "short_resp",
        title: "Email",
        required: false
      },
      {
        type: "checkbox",
        title: "What year are you?",
        options: ["1", "2", "3", "4"]
      },
      {
        type: "checkbox",
        title: "What are your interests",
        options: ["UI/UX Design", "Web Development", "Art", "Engineering"]
      },
      {
        type: "bool",
        title: "Are you coming to our first meeting?"
      }
    ];
    return (
      <Form
        entries={entries}
        title="Interest Form"
        description="Thanks for visiting!  Fill this out and come to our first meeting!"
      />
    );
  }
}

export default Interest;
