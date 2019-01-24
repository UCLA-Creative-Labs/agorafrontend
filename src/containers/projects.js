import React from "react";
import styled from "react-emotion";
import { push } from "react-router-redux";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { PROJECTS, CURRENT_QUARTER } from "../config/config";

import Header from "../components/Header";
import Project from "../components/Project";
import ProjectsOverlay from "../components/ProjectsOverlay";
import Button from "../components/Button";
import MovingArrow from "../components/MovingArrow";

const ProjectQuarters = styled("div")`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  > * {
    margin-top: 5px;
  }
`;

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
      activeOverlay: null
    };

    this.closeOverlay = this.closeOverlay.bind(this);
    this.mountProjectsOverlay = this.mountProjectsOverlay.bind(this);
    this.listProjects = this.listProjects.bind(this);
  }

  componentDidMount() {
    this.listProjects();
  }

  async listProjects() {
    this.setState({
      projects: PROJECTS
    });
  }

  closeOverlay() {
    this.setState({ activeOverlay: null });
  }

  mountProjectsOverlay(quarterKey) {
    const projectsList = PROJECTS[quarterKey].projects;
    if (projectsList == null) {
      this.setState({ activeOverlay: null });
      return;
    }
    this.setState({ activeOverlay: quarterKey });
  }

  render() {
    const projectsStyle = {
      margin: "0 4rem 4rem 4rem"
    };

    const quarterContainerStyle = {
      margin: "3rem 0 5rem 0"
    };

    const projectsContainerStyle = {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "start",
      alignItems: "space-between",
      flexDirection: "row"
    };

    const onClickNav = path => this.props.navigate(path);

    const headerPaths = [
      {
        name: "home",
        onClick: () => onClickNav("/")
      },
      {
        name: "about",
        onClick: () => onClickNav("/about")
      }
    ];

    return (
      <div>
        <div className="project-quarters">
          <Button
            color="primary"
            label="Winter 2019"
            className="sentinel-primary darkgray project-quarter"
            onClick={() => this.mountProjectsOverlay("W_18")}
          />
        </div>
        {this.state.activeOverlay != null ? (
          <ProjectsOverlay
            projects={PROJECTS[this.state.activeOverlay].projects}
            closeOverlay={this.closeOverlay}
          />
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state.user
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      navigate: link => push(link)
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Projects);
