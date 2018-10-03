import React from "react";
import linkState from "linkstate";
import { CURRENT_PROJECTS } from "../config/config";

import ApplicationClient from "../api/application_client";
import Button from "../components/Button";
import ApplyProjectMember from "../components/ApplyProjectMember";

import puzzle1 from "../assets/images/puzzle1.png";

const applicationClient = ApplicationClient.getSingleton();

class Apply extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        last_name: "",
        first_name: "",
        email: "",
        response: "",
        first_choice: "",
        second_choice: "",
        third_choice: ""
      },
      err: false
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  async onSubmit(e) {
    const data = Object.assign({}, this.state.form);
    const res = await applicationClient.createApplication();
  }

  render() {
    return (
      <div className="apply-content">
        <img className="apply-puzzle" src={puzzle1} />
        <div className="apply-main">
          <ApplyProjectMember />
        </div>
      </div>
    );
  }
}

export default Apply;
