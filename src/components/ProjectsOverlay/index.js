import React from "react";

import Project from "../Project";
import Button from "../Button";

class ProjectsOverlay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="projects-overlay">
        <Button
          className="projects-overlay-back"
          color="primary"
          label="<"
          onClick={this.props.closeOverlay}
        />
        <div className="projects-list">
          {this.props.projects.map((project, index) => (
            <Project
              key={index}
              title={project.title}
              description={project.text}
              lead={project.lead}
              desired={project.desired}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default ProjectsOverlay;
