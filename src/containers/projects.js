import React from 'react';
import { PROJECTS } from '../config/config';

import Card from '../components/Card';

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
    };

    this.listProjects = this.listProjects.bind(this);
  }

  componentDidMount() {
    this.listProjects();
  }

  async listProjects() {
    this.setState({
      projects: PROJECTS,
    });
  }

  render() {
    const projectsStyle = {
      margin: '50px',
    };

    const projectsContainerStyle = {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
    };

    return (
      <div style={projectsStyle}>
        <h1>projects / fall 2017</h1>
        <div style={projectsContainerStyle}>
          {this.state.projects.map((project, index) => {
            return (
              <Card project={project} key={index} />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Projects;
