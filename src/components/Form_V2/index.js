import React from "react";
import PropTypes from "prop-types";
import styled from "react-emotion";

import FormItem from "../FormItem";
import { formItemProp, FormItemTypes } from "../../types/formItem";
import Button from "../Button";

// emotion styles
const FormItemsWrapper = styled("div")`
  text-align: left;
  width: 30%;
  margin: 0 auto;
`;

const DividingLine = styled("div")`
  border-bottom: 1px solid black;
  width: 5%;
  margin: 0 auto;
  margin-top: 40px;
`;

// end of styles

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleSubmit = this.handleSubmit.bind(this);
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

  handleSubmit() {
    const { onSubmit } = this.props;

    onSubmit(this.state);
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
        </div>
        <DividingLine />
        <FormItemsWrapper>
          {items.map((item, index) => {
            return <FormItem key={index} item={item} />;
          })}
        </FormItemsWrapper>

        <Button
          onClick={this.handleSubmit}
          color="primary"
          label="Submit Application"
        />
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
