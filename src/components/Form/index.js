import React from 'react';
import PropTypes from 'prop-types';

/*
	Form component is for creating forms with FormItem components as nested children. By default,
	the created form comes with a 'Submit' button at the bottom.

	Takes 3 props:
	- title (OPTIONAL STRING): Sets the title of the entire form. (Uses <h1></h1> tag)
	- description (OPTIONAL STRING): Sets the description of the entire form. (Uses <p></p> tag)
	- onSubmit (OPTIONAL FUNCTION): Sets the function to be run when the form is submitted.
*/

class Form extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	handleSubmit() {
		const {onSubmit} = this.props;
		if (typeof onSubmit !== "undefined") {
			onSubmit();
		}
	}

	render() {
		const {title, description, children} = this.props;
		return (
			<form onSubmit={() => this.handleSubmit()}>
				<h1>
					{title}
				</h1>
				<p>
					{description}
				</p>
				{children}
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
