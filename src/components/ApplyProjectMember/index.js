import React from "react";

import Form from "../Form";
import FormItem from "../FormItem";

class ApplyProjectMember extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="apply-project-member">
        <div className="apply-teaser">
          <h1 className="apply-teaser-header sentinel-secondary black">
            So you want to work on a project, huh?
          </h1>
          <h2 className="untitled-secondary gray apply-teaser-header2">
            Tell us a bit about yourself.
          </h2>
        </div>
        <Form>
          <FormItem
            className="untitled-primary black"
            type="short_resp"
            title="What project do you REALLY want to be on?"
            required={true}
          />
        </Form>
      </div>
    );
  }
}

export default ApplyProjectMember;
