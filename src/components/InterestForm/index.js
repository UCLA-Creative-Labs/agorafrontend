import React from "react";
import PropTypes from "prop-types";
import FormItem from "../FormItem";
import ApplicationClient from "../../api/application_client";

class InterestForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { title, description } = this.props;

    const formStyle = {
      width: "400px",
      border: "2px solid black",
      margin: "50px",
      padding: "10px"
    };

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
      <div style={formStyle}>
        <h2>{title}</h2>
        <p>{description}</p>
        {entries.map((entry, index) => {
          return <FormItem key={index} entry={entry} />;
        })}
      </div>
    );
  }
}

InterestForm.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  onSubmit: PropTypes.func
};

export default InterestForm;
