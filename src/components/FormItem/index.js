import React from "react";
import PropTypes from "prop-types";

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
          <label>
            {reqResponse ? (
              <input type="checkbox" name={title} className="click" required />
            ) : (
              <input type="checkbox" name={title} className="click" />
            )}
            {option}
          </label>
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
          <label>
            <input type="radio" className="click" name="True" />
            {"True"}
          </label>
        </span>
        <span style={{ paddingLeft: "20px" }}>
          <label>
            <input type="radio" className="click" name="True" />
            {"False"}
          </label>
        </span>
      </div>
    );
  }

  displayWrapper(type, title, reqResponse, optionsArr, secure) {
    let item;

    switch (type) {
      case "checkbox":
        item = this.checkbox(title, optionsArr, reqResponse);
        break;
      case "short_resp":
        item = this.short_resp(reqResponse, secure);
        break;
      case "long_resp":
        item = this.long_resp(title, reqResponse);
        break;
      case "bool":
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
