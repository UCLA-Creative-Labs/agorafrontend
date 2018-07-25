import React from 'react';
import PropTypes from 'prop-types';

class FormItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

		};
	}

	render() {
		let displayType;
		let text = this.props.title;
		let itemID = this.props.title;
		switch (this.props.type) {
			case 'checkbox':
				itemID += ' checkbox';
				displayType = (
					<form>
						<input type="checkbox" id={itemID} name={text} />
						<label htmlFor={itemID}>{text}</label>
					</form>
				);
				break;
			case 'short_resp':
				itemID += ' short_resp';
				displayType = (
					<form>
						<input type="text" id={itemID} name={text} />
						<label htmlFor={itemID}>{text}</label>
					</form>
				);
				break;
			case 'long_resp':
				itemID += ' long_resp';
				displayType = (
					<form>
						<textarea name={text} id={itemID} cols="40" rows="5"></textarea>
						<label htmlFor={itemID}>{text}</label>
					</form>
				);
				break;
			case 'bool':
				itemID += ' bool';
				let yes = itemID + ' yes';
				let no = itemID + ' no';
				displayType = (
					<form>
						<fieldset>
							<legend>{text}</legend>
							<input type="radio" name={text} id={yes} value="1" />
							<label for={yes}>Yes</label>
							<input type="radio" name={text} id={no} value="0" />
							<label for={no}>No</label>
						</fieldset>
					</form>
				);
				break;
			default:
				break;
		}

		return (
			displayType
		);
	}
}

FormItem.propTypes = {
	type: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	required: PropTypes.bool,
	options: PropTypes.arrayOf(PropTypes.string),
};

export default FormItem;