import React from 'react';
import PropTypes from 'prop-types';

class FormItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	checkbox(id, text, reqResponse) {
		return (
			<fieldset>
				{reqResponse ? <input type="checkbox" id={id} name={text} className="click" required/>
				: <input type="checkbox" id={id} name={text} className="click" />}
				<label htmlFor={id}>{text}</label>
			</fieldset>
		);
	}

	short_resp(id, text, reqResponse) {
		return (
			<fieldset>
				<label htmlFor={id}>{text}</label>
				<br />
				{reqResponse ? <input type="text" id={id} name={text} required/>
				: <input type="text" id={id} name={text} />}
			</fieldset>
		);
	}

	long_resp(id, text, reqResponse) {
		return (
			<fieldset>
				<label htmlFor={id}>{text}</label>
				<br />
				{reqResponse ? <textarea name={text} id={id} cols="40" rows="5" required></textarea>
				: <textarea name={text} id={id} cols="40" rows="5"></textarea>}
				<br />
			</fieldset>
		);
	}

	bool(yesID, noID, text, reqResponse) {
		return (
			<fieldset>
				<legend>{text}</legend>
				{reqResponse ? <input type="radio" name={text} id={yesID} value="1" className="click" required/>
				: <input type="radio" name={text} id={yesID} value="1" className="click" />}
				<label htmlFor={yesID}>Yes</label>
				{reqResponse ? <input type="radio" name={text} id={noID} value="0" className="click" required/>
				: <input type="radio" name={text} id={noID} value="0" className="click" />}
				<label htmlFor={noID}>No</label>
			</fieldset>
		);
	}

	render() {
		let displayType;
		let text = this.props.title;
		let itemID = this.props.title;
		let reqResponse = (this.props.required) ? true : false;
		switch (this.props.type) {
			case 'checkbox':
				itemID += ' checkbox';
				displayType = this.checkbox(itemID, text, reqResponse);
				break;
			case 'short_resp':
				itemID += ' short_resp';
				displayType = this.short_resp(itemID, text, reqResponse);
				break;
			case 'long_resp':
				itemID += ' long_resp';
				displayType = this.long_resp(itemID, text, reqResponse);
				break;
			case 'bool':
				itemID += ' bool';
				let yes = itemID + ' yes';
				let no = itemID + ' no';
				displayType = this.bool(yes, no, text, reqResponse);
				break;
			default:
				displayType = null;
				break;
		}
		return (displayType);
	}
}

FormItem.propTypes = {
	type: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	required: PropTypes.bool,
	options: PropTypes.arrayOf(PropTypes.string),
};

export default FormItem;