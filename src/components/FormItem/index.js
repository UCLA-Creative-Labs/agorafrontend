import React from "react";
import PropTypes from "prop-types";

/*
	FormItem component is for creating entries/input areas within a Form component.

	Takes 4 props:
	- type (REQUIRED STRING): Sets the type of entry/input area. Currently only supports 4 options: 'checkbox'
	(self-explanatory), 'short_resp' (a short response field <= 25 chars, i.e. for identification info. like 'First Name', 'Last Name'
	, etc), 'long_resp' (a long response field, i.e. for essay questions), and 'bool' (for questions that can only be
	answered with 1 option, i.e. 'Yes or No' prompts)
	- title (REQUIRED STRING): Sets the title of the overall form item.
	- required (OPTIONAL BOOLEAN): Setting this to {true} causes the entry/input area to be required (user must fill out).
	By default, entry/input areas are not required.
	- options (OPTIONAL ARRAY OF STRINGS): Sets the available options/prompts of the overall form item. For example,
	if this.props.options = ['First Name', 'Last Name'], and we're using a FormItem component of type 'short_resp', then
	we would have something like: 

	First Name 
	[              ]
	Last name
	[              ]

	Basically, the options prop defines all of the possible options/prompts. If this was a FormItem component of type
	'bool' and this.props.options = ['yes', 'no', 'maybe so'], we would have something like:

	[ ] yes
	[ ] no
	[ ] maybe so
	- secure (OPTIONAL BOOLEAN): Only applies to 'short_resp' types; setting this to {true} causes the 'short_resp' entry
	/input area to be obscured so that it cannot be read, i.e. for login password fields. By default, entry/input areas
	are not secure (text is not obscured, but shown fully).
*/

class FormItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  checkbox(title, option, reqResponse) {
    return (
      <div>
        <label>
          {option}
          {reqResponse ? (
            <input type="checkbox" name={title} className="click" required />
          ) : (
            <input type="checkbox" name={title} className="click" />
          )}
        </label>
      </div>
    );
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
          <label>
            {"True"}
            <input type="radio" className="click" name="True" />
          </label>
        </span>
        <span style={{ paddingLeft: "20px" }}>
          <label>
            {"False"}
            <input type="radio" className="click" name="True" />
          </label>
        </span>
      </div>
    );
  }

  displayWrapper(type, title, reqResponse, optionsArr, secure) {
    let buffer = [];

    switch (type) {
      case "checkbox":
        buffer = optionsArr.map((option, index) => {
          return (
            <div key={index}>{this.checkbox(title, option, reqResponse)}</div>
          );
        });
        break;
      case "short_resp":
        buffer.push(<div key="0">{this.short_resp(reqResponse, secure)}</div>);
        break;
      case "long_resp":
        buffer.push(<div key="0">{this.long_resp(title, reqResponse)}</div>);
        break;
      case "bool":
        buffer.push(<div key="0">{this.bool()}</div>);
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
        <fieldset style={fieldSet}>{buffer}</fieldset>
      </div>
    );
  }

  render() {
    const { type, title, required, options, secure } = this.props.entry;

    const optionsArr = options ? options : [];
    return this.displayWrapper(type, title, required, optionsArr, secure);
  }
}

FormItem.propTypes = {
  entry: PropTypes.shape({
    type: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    required: PropTypes.bool,
    options: PropTypes.arrayOf(PropTypes.string),
    secure: PropTypes.bool
  })
};

export default FormItem;
