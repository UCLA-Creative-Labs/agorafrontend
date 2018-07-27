import React from 'react';
import PropTypes from 'prop-types';

class FormItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	checkbox(id, title, option, reqResponse) {
		return (
			<div key={id}>
				{reqResponse ? <input type="checkbox" id={id} name={title} className="click" required/>
				: <input type="checkbox" id={id} name={title} className="click" />}
				<label htmlFor={id}>{option}</label>
			</div>
		);
	}

	short_resp(id, title, option, reqResponse) {
		return (
			<div key={id}>
				<label htmlFor={id}>{option}</label>
				<br />
				{reqResponse ? <input type="text" id={id} name={title} required/>
				: <input type="text" id={id} name={title} />}
			</div>
		);
	}

	long_resp(id, title, option, reqResponse) {
		return (
			<div key={id}>
				<label htmlFor={id}>{option}</label>
				<br />
				{reqResponse ? <textarea name={title} id={id} cols="40" rows="5" required></textarea>
				: <textarea name={title} id={id} cols="40" rows="5"></textarea>}
				<br />
			</div>
		);
	}

	bool(id, title, option, reqResponse) {
		return (
			<div key={id}>
				{reqResponse ? <input type="radio" name={title} id={id} value={option} className="click" required/>
				: <input type="radio" name={title} id={id} value={option} className="click" />}
				<label htmlFor={id}>{option}</label>
			</div>
		);
	}

	displayWrapper(type, title, reqResponse, optionsArr) {
		let buffer = []
		let itemID = title;
		for (var i = 0; i < optionsArr.length; i++) {
			let element;
			switch (type) {
				case 'checkbox':
					itemID += ' checkbox';
					element = this.checkbox(itemID, title, optionsArr[i], reqResponse);
					break;
				case 'short_resp':
					itemID += ' short_resp';
					element = this.short_resp(itemID, title, optionsArr[i], reqResponse);
					break;
				case 'long_resp':
					itemID += ' long_resp';
					element = this.long_resp(itemID, title, optionsArr[i], reqResponse);
					break;
				case 'bool':
					itemID += optionsArr[i] + ' bool';
					element = this.bool(itemID, title, optionsArr[i], reqResponse);
					break;
				default:
					break;
			}
			buffer.push(element);
		}
		return (
			<fieldset>
				<legend>{title}</legend>
				{buffer}
			</fieldset>
		);
	}

	render() {
		if (!(this.props.type || this.props.title || this.props.required || this.props.options)) {
			return (null);
		}
		let reqResponse = (this.props.required) ? true : false;
		let optionsArr = (this.props.options) ? this.props.options : [];
		let displayType = this.displayWrapper(this.props.type, this.props.title, reqResponse, optionsArr);
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