import React from 'react';
import linkState from 'linkstate';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { login, createAccount } from '../api/api.js';
import Button from '../components/Button';

class Login extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			form: {
				username: '',
				password: '',
			},
			loggedin: false,
			err: false,
			confirm: false,
		}
		this.onSubmit = this.onSubmit.bind(this);
	}

	componentDidMount(){
		if(this.state.loggedin){
	   	this.props.navigate('/dashboard');
	  }
	}

	componentDidUpdate(){
		if(this.state.loggedin){
			this.props.navigate('/dashboard');
		}
	}

	async onSubmit(e){
    const state = Object.assign({}, this.state);
    // createAccount(state);
    const data = await login(state);
    // const data = await createAccount(state);

    if(data.err){
    	this.setState({ err: data.err });
    }

    if(data.confirm){
    	this.setState({ 
    		confirm: data.confirm, 
    		loggedin: true,
    	});
    }
  }

	render(){
		const err = this.state.err ? this.state.err : ''; //change later
		const confirm = this.state.confirm ? this.state.confirm : '';

		return <div>
			<h1>Login</h1>
			<h2>{err}</h2>
			<h2>{confirm}</h2>
			<textarea value={ this.state.username } onChange={ linkState(this, 'username') }/>
      <textarea value={ this.state.password } onChange={ linkState(this, 'password') } />
			<Button label='login' onClick={this.onSubmit} color='primary' />
		</div>
	}
}

const mapStateToProps = state => ({
  ...state.user,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      navigate: link => push(link),
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Login);

