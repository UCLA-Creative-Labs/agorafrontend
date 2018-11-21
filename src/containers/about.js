import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const aboutStyle = {
      margin: "8rem"
    };

    return (
      <div style={aboutStyle}>
        <h1>about</h1>
        <p>
          Creative Labs provides a space for students at UCLA to work on
          creative projects. Founded in 2016, Creative Labs was comprised of
          mostly Design Media Arts (DESMA) and Computer Science majors but has
          grown since to include students from all parts of campus.
        </p>
      </div>
    );
  }
}

export default About;
