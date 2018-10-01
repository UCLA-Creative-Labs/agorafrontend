import React from "react";

import { FormItemTypes, formItemProp } from "../../types/formItem";

/*
	FormItem component is for creating entries/input areas within a Form component.

	Basically, the options prop defines all of the possible options/prompts. If this was a FormItem component of type
	'bool' and this.props.options = ['yes', 'no', 'maybe so'], we would have something like:

	[ ] yes
	[ ] no
	[ ] maybe so
*/

class FormItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  checkbox(title, options, reqResponse) {
    const checkbox = options.map((option, index) => {
      return (
        <div key={index}>
          {reqResponse ? (
            <input
              type={FormItemTypes.CHECKBOX}
              name={title}
              className="click"
              required
            />
          ) : (
            <input
              type={FormItemTypes.CHECKBOX}
              name={title}
              className="click"
            />
          )}
          <label>{option}</label>
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
          {reqResponse ? (
            <input type={respType} maxLength="25" required />
          ) : (
            <input type={respType} maxLength="25" />
          )}
        </div>
      </div>
    );
  }

  long_resp(reqResponse) {
    return (
      <div>
        <div>
          {reqResponse ? (
            <textarea cols="40" rows="5" required />
          ) : (
            <textarea cols="40" rows="5" />
          )}
        </div>
      </div>
    );
  }

  bool() {
    return (
      <div>
        <span>
          <input type="radio" className="click" name="True" />
          <label>{"True"}</label>
        </span>
        <span style={{ paddingLeft: "20px" }}>
          <input type="radio" className="click" name="True" />
          <label>{"False"}</label>
        </span>
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
      case FormItemTypes.BOOL:
        item = this.bool();
        break;
      default:
        break;
    }

    const itemContainer = {
      margin: "0",
      padding: "10px 0px"
    };

    const titleContainer = {
      padding: "0"
    };

    const titleStyle = {
      margin: "2px",
      display: "inline"
    };

    const requiredStyle = {
      margin: "2px",
      paddingLeft: "50px",
      display: "inline",
      color: "red"
    };

    const fieldSet = {
      padding: "10px 5px",
      margin: "5px 0px"
    };

    return (
      <div style={itemContainer}>
        <div style={titleContainer}>
          <span>
            <p style={titleStyle}>{title}</p>
            {reqResponse && <p style={requiredStyle}>*Required</p>}
          </span>
        </div>
        <fieldset style={fieldSet}>{item}</fieldset>
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
