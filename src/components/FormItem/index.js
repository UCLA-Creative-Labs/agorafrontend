import React from 'react';
import PropTypes from 'prop-types';

class FormItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	checkbox(id, text) {
		return (
			<form>
				<input type="checkbox" id={id} name={text} className="click" />
				<label htmlFor={id}>{text}</label>
			</form>
		);
	}

	short_resp(id, text) {
		return (
			<form>
				<label htmlFor={id}>{text}</label>
				<br />
				<input type="text" id={id} name={text} />
			</form>
		);
	}

	long_resp(id, text) {
		return (
			<form>
				<label htmlFor={id}>{text}</label>
				<br />
				<textarea name={text} id={id} cols="40" rows="5"></textarea>
				<br />
				<input type="submit" className="click" />
			</form>
		);
	}

	bool(yesID, noID, text) {
		return (
			<form>
				<fieldset>
					<legend>{text}</legend>
					<input type="radio" name={text} id={yesID} value="1" className="click" />
					<label htmlFor={yesID}>Yes</label>
					<input type="radio" name={text} id={noID} value="0" className="click" />
					<label htmlFor={noID}>No</label>
				</fieldset>
			</form>
		);
	}

	render() {
		let displayType;
		let text = this.props.title;
		let itemID = this.props.title;
		switch (this.props.type) {
			case 'checkbox':
				itemID += ' checkbox';
				displayType = this.checkbox(itemID, text);
				break;
			case 'short_resp':
				itemID += ' short_resp';
				displayType = this.short_resp(itemID, text);
				break;
			case 'long_resp':
				itemID += ' long_resp';
				displayType = this.long_resp(itemID, text);
				break;
			case 'bool':
				itemID += ' bool';
				let yes = itemID + ' yes';
				let no = itemID + ' no';
				displayType = this.bool(yes, no, text);
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