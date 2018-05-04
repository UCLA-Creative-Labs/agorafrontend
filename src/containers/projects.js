import React from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

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

    const onClickNav = path => this.props.navigate(path);

    const headerPaths = [
      {
        name: 'home',
        onClick: () => onClickNav('/')
      },
      {
        name: 'about',
        onClick: () => onClickNav('/about')
      },
    ];

    return (
      <div>
        <Header title="Projects" links={headerPaths} />
        <div style={projectsStyle}>
          {this.state.projects.map((quarter, i) => (
            <div key={i} style={quarterContainerStyle}>
              <h1>{quarter.name}</h1>
              <div style={projectsContainerStyle}>
                {quarter.projects.map((project, j) => (
                  <Card title={project.title} alt="A Day in LA" text={project.text} key={j} img="https://www.gettyimages.ie/gi-resources/images/Homepage/Hero/UK/CMS_Creative_164657191_Kingfisher.jpg" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state.user,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      navigate: link => push(link),
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Projects);
