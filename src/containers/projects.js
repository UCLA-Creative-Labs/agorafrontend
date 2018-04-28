import React from 'react';
import { PROJECTS } from '../config/config';

import Card from '../components/Card';
import Header from '../components/Header';

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
      margin: '0 4rem 4rem 4rem',
    };

    const quarterContainerStyle = {
      margin: '3rem 0 5rem 0',
    };

    const projectsContainerStyle = {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      alignItems: 'space-between',
    };

    return (
      <div style={projectsStyle}>
        <Header links={[{ name: 'swag' }, { name: 'yuh' }]} />
        {this.state.projects.map((quarter, i) => (
          <div key={i} style={quarterContainerStyle}>
            <h1>{quarter.name}</h1>
            <div style={projectsContainerStyle}>
              {quarter.projects.map((project, j) => (
                <Card project={project} key={j} />
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Projects;
