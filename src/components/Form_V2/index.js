import React from "react";
import PropTypes from "prop-types";
import styled from "react-emotion";

import FormItem from "../FormItem";
import { formItemProp, FormItemTypes } from "../../types/formItem";
import Button from "../Button";
import LoadingScreen from "../LoadingScreen";
import SuccessScreen from "../SuccessScreen";
import FailedScreen from "../FailedScreen";
import { CreateStatus } from "../../api/constants";

// emotion styles
const FormItemsWrapper = styled("div")`
  text-align: left;
  width: 60%;
  margin: 0 auto;
  min-width: 500px;
`;

const DividingLine = styled("div")`
  border-bottom: 1px solid #a9a9ad;
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
    this.updateForm = this.updateForm.bind(this);
  }

  componentDidMount() {
    const { items } = this.props;
    const mountState = {};

    items.forEach(item => {
      let mountValue;

      switch (item.type) {
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

  updateForm(id, value) {
    const newValue = {};
    newValue[id] = value;
    this.setState(prevState => ({
      ...prevState,
      ...newValue
    }));
  }

  idleForm() {
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
            return (
              <FormItem key={index} item={item} updateForm={this.updateForm} />
            );
          })}
          <Button
            onClick={this.handleSubmit}
            color="primary"
            label="Submit Application"
            className="app-submit-button"
          />
        </FormItemsWrapper>
      </div>
    );
  }

  creatingForm() {
    return <LoadingScreen />;
  }

  failedForm() {
    return (
      <FailedScreen
        link="/"
        text="Failed to submit application :("
        linkText="Refresh and try again"
      />
    );
  }

  successForm() {
    return <SuccessScreen text="Thanks for applying!" />;
  }

  render() {
    const { createStatus } = this.props;
    switch (createStatus) {
      case CreateStatus.IDLE: {
        return this.idleForm();
      }
      case CreateStatus.CREATING: {
        return this.creatingForm();
      }
      case CreateStatus.FAILED: {
        return this.failedForm();
      }
      case CreateStatus.SUCCESS: {
        return this.successForm();
      }
      default: {
        return this.idleForm();
      }
    }
  }
}

Form.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  onSubmit: PropTypes.func,
  items: PropTypes.arrayOf(formItemProp)
};

export default Form;
