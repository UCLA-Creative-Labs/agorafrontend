import React from 'react';

class Input extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			
		};
	}

	render(){
		return (
			<div>
				<input type='submit' value={this.props.value} ></input>
			</div>
		);
	}
}

export default Input;