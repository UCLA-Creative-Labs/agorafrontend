import React from "react";
import PropTypes from "prop-types";

import FormItem from "../FormItem";
import { formItemProp, FormItemTypes } from "../../types/formItem";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { items } = this.props;
    const mountState = {};

    items.forEach(item => {
      let mountValue;

      switch (item.type) {
        case FormItemTypes.CHECKBOX:
          mountValue = [];
          break;
        case FormItemTypes.BOOL:
          mountValue = null;
          break;
        default:
          mountValue = "";
      }

      mountState[item.id] = mountValue;
    });

    this.setState({
      ...mountState
    });
  }

  render() {
    const { title, description, items } = this.props;

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
        {items.map((item, index) => {
          return <FormItem key={index} item={item} />;
        })}
      </div>
    );
  }
}

Form.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  onSubmit: PropTypes.func,
  items: PropTypes.arrayOf(formItemProp)
};

export default Form;
