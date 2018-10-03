import React from "react";
import ReactDOM from "react-dom";
import { FormItemTypes, formItemProp } from "../../types/formItem";
import styled from "react-emotion";

/*
	FormItem component is for creating entries/input areas within a Form component.

	Basically, the options prop defines all of the possible options/prompts. If this was a FormItem component of type
	'bool' and this.props.options = ['yes', 'no', 'maybe so'], we would have something like:
	[ ] yes
	[ ] no
	[ ] maybe so
*/

// emotion styles
const PGraph = styled("p")`
  display: inline;
`;

const InputHeader = styled("h2")`
  margin-top: 40px;
  margin-bottom: 5px;
  font-size: 1.3rem;
`;

const ReqPgraph = styled("p")`
  margin: 2px;
  padding-left: 5px;
  display: inline;
  color: red;
`;

const ShortInput = styled("input")`
  background-color: transparent;
  border-color: transparent;
  outline: none;
`;

const LongInput = ShortInput.withComponent("textarea");
// end of emotion styles

class FormItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.updateForm = this.updateForm.bind(this);
  }

  componentDidMount() {
    // Initialize options arrays for bool, checkbox
    const { item: { options } } = this.props;
    if (options) {
      const newOptions = {};
      options.forEach(opt => {
        newOptions[opt] = false;
      });

      this.setState({...newOptions});
    }
  }

  checkboxSelect(id, name, isMulti) {
    const { updateForm } = this.props;

    const newSelect = {};
    if (!isMulti) {
      // Set everything to false first
      Object.keys(this.state).forEach(key => {
        newSelect[key] = false;
      });
    }
    newSelect[name] = true;
    
    updateForm(id, newSelect);
    this.setState(prevState => ({...newSelect}));
  }

  updateForm(e) {
    const {updateForm, item: { type, id }} = this.props;
    switch (type) {

      case FormItemTypes.SHORT_RESPONSE:
      case FormItemTypes.LONG_RESPONSE:
        const { target: { value }} = e;
        updateForm(id, value);
        break;

      case FormItemTypes.CHECKBOX:
        const { target: { name }} = e;
        this.checkboxSelect(id, name);
        break;

      default:
        break;
    };
  }

  checkbox(title, options, reqResponse) {
    const checked = [];
    Object.keys(this.state).forEach( key => {
      checked.push(this.state[key]);
    });
    const checkbox = options.map((option, index) => {
      return (
        <div key={index}>
          <input
            type={FormItemTypes.CHECKBOX}
            name={option}
            className="click"
            required={reqResponse}
            checked={checked[index]}
            onClick={e => this.updateForm(e)}
          />
          <PGraph className="untitled-secondary gray">{option}</PGraph>
        </div>
      );
    });

    return checkbox;
  }

  short_resp(reqResponse, secure) {
    const respType = secure ? "password" : "text";
    return (
      <div>
        <div>
          <ShortInput
            type={respType}
            maxLength="25"
            placeholder="Enter here..."
            className="untitled-secondary-italic"
            required={reqResponse}
            onChange={e => this.updateForm(e)}
          />
        </div>
      </div>
    );
  }

  long_resp(reqResponse) {
    return (
      <div>
        <div>
          <LongInput
            cols="40"
            rows="5"
            placeholder="Enter here..."
            className="untitled-secondary-italic"
            required={reqResponse}
            onChange={e => this.updateForm(e)}
          />
        </div>
      </div>
    );
  }

  displayWrapper(type, title, reqResponse, optionsArr, secure) {
    let item;

    switch (type) {
      case FormItemTypes.CHECKBOX:
        item = this.checkbox(title, optionsArr, reqResponse);
        break;
      case FormItemTypes.SHORT_RESPONSE:
        item = this.short_resp(reqResponse, secure);
        break;
      case FormItemTypes.LONG_RESPONSE:
        item = this.long_resp(title, reqResponse);
        break;
      default:
        break;
    }

    return (
      <div>
        <InputHeader className="untitled-secondary gray">
          {title}
          {reqResponse && <ReqPgraph>(Required)</ReqPgraph>}
        </InputHeader>
        {item}
      </div>
    );
  }

  render() {
    const { type, title, required, options, secure } = this.props.item;
    const optionsArr = options ? options : [];
    return this.displayWrapper(type, title, required, optionsArr, secure);
  }
}

FormItem.propTypes = {
  item: formItemProp
};

export default FormItem;
