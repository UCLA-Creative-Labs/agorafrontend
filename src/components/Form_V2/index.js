import React from "react";
import PropTypes from "prop-types";
import FormItem from "../FormItem";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { title, description, entries } = this.props;

    const formStyle = {
      width: "400px",
      border: "2px solid black",
      margin: "50px",
      padding: "10px"
    };

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

Form.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  onSubmit: PropTypes.func,
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      required: PropTypes.bool,
      options: PropTypes.arrayOf(PropTypes.string),
      secure: PropTypes.bool
    })
  )
};

export default Form;
