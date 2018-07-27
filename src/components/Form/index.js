import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	submitWrapper() {
		if (typeof(this.props.onSubmit) !== "undefined") {
			this.props.onSubmit();
		}
		alert('Form submitted successfully!');
	}

	render() {
		return (
			<form onSubmit={() => this.submitWrapper()}>
				<h1>
					{this.props.title}
				</h1>
				<p>
					{this.props.description}
				</p>
				{this.props.children}
				<input type="submit" className="click" />
			</form>
		);
	}
}

Form.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	onSubmit: PropTypes.func,
};

export default Form;