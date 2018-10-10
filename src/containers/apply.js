import React from "react";
import linkState from "linkstate";

import { createApplication } from "../actions/applications";
import Button from "../components/Button";
import ApplyProjectMember from "../components/ApplyProjectMember";
import SuccessScreen from "../components/SuccessScreen";
import puzzle1 from "../assets/images/puzzle1.png";

class Apply extends React.Component {
  render() {
    return (
      <div className="apply-content">
        <img className="apply-puzzle" src={puzzle1} />
        <div className="apply-main">
          <ApplyProjectMember />
          {/* <SuccessScreen text="Applications are now closed. Thanks!" /> */}
        </div>
      </div>
    );
  }
}

export default Apply;
