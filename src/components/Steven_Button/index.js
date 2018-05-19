import React from 'react';

class SButton extends React.Component {
	render() {
		return (
			<button className="buttonStyle" onClick={() => this.props.onClick()}>
				Click to increment: {this.props.value}
			</button>
		);
	}
}

export default SButton;