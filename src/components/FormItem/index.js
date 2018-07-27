import React from 'react';
import PropTypes from 'prop-types';

/*
	FormItem component is for creating entries/input areas within a Form component.

	Takes 4 props:
	- type (REQUIRED STRING): Sets the type of entry/input area. Currently only supports 4 options: 'checkbox'
	(self-explanatory), 'short_resp' (a short response field, i.e. for identification info. like 'First Name', 'Last Name'
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
*/

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
				<div>
					{reqResponse ? <input type="text" id={id} name={title} required/>
					: <input type="text" id={id} name={title} />}
				</div>
			</div>
		);
	}

	long_resp(id, title, option, reqResponse) {
		return (
			<div key={id}>
				<label htmlFor={id}>{option}</label>
				<div>
					{reqResponse ? <textarea name={title} id={id} cols="40" rows="5" required></textarea>
					: <textarea name={title} id={id} cols="40" rows="5"></textarea>}
				</div>
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
		const {type, title, required, options} = this.props;
		if (!(type || title || required || options)) {
			return (null);
		}
		const optionsArr = options ? options : [];
		const displayType = this.displayWrapper(type, title, required, optionsArr);
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
