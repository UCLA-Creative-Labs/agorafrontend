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

    return (
      <div className="apply-project-member">
        <div className="apply-teaser">
          <h1 className="apply-teaser-header sentinel-secondary black">
            {title}
          </h1>
          <h2 className="untitled-secondary gray apply-teaser-header2">
            {description}
          </h2>
          {items.map((item, index) => {
            return <FormItem key={index} item={item} />;
          })}
        </div>
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
