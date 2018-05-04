import React from 'react';
import linkState from 'linkstate';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Button from '../components/Button';

const createAccount = async (data) => { //bs fetch function to test stuff... change later
  try{
    const resp = await fetch('http://localhost:3000/admins/new/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    const status = resp.status;
    const json = await resp.json();
    
    if(status !== 200){
    	if(json.err){
    		throw new Error(json.err);
    	} else{
    		throw new Error('Failed to create account, no error code provided.');
    	}
    }

    return{
    	err: false,
    	json: json,
    	confirm: 'Account successfully created.',
    }

  } catch(e){
    return {
      err: e.message
    }
  }
}

const login = async (data) => {
  try{
    const resp = await fetch('http://localhost:3000/admins/login/', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    const status = resp.status;
    const json = await resp.json();

    if(status !== 200){
    	if(json.err){
    		throw new Error(json.err);
    	}
    	else{
    		throw new Error('Failed to log in, no error code provided.');
    	}
    }

    return{
    	err: false,
    	json: json,
    	confirm: 'Login successful.',
    }

  } catch(e){
    return{
      err: e.message,
    }
  }
}

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

	async onSubmit(e){
    const state = Object.assign({}, this.state);
    // createAccount(state);
    const data = await login(state);
    // const data = await createAccount(state);

    if(data.err){
    	this.setState({ err: data.err });
    }

    if(data.confirm){
    	this.setState({ confirm: data.confirm });
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

