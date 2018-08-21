/**
 * Add a description about this file here.
 *
 * @flow
 *
 */


import React from 'react';
import linkState from 'linkstate';
import { CURRENT_PROJECTS } from '../config/config';

import { createApp } from '../api/api';
import Button from '../components/Button';

class Apply extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        last_name: '',
        first_name: '',
        email: '',
        response: '',
        first_choice: '',
        second_choice: '',
        third_choice: '',
      },
      err: false,
    }
    this.onSubmit = this.onSubmit.bind(this);
  }

  async onSubmit(e){
    const data = Object.assign({}, this.state.form);
    const res = await createApp(data);
    console.log(res);
  }

  render() {
    const project_titles = CURRENT_PROJECTS.map( p => p.title );
    return (
      <div>
        <h1>apply</h1>
        <h2>First name</h2>
        <textarea value={ this.state.first_name } onChange={ linkState(this, 'form.first_name') } />
        <h2>Last name</h2>
        <textarea value={ this.state.last_name } onChange={ linkState(this, 'form.last_name') } />
        <h2>Email</h2>
        <textarea value={ this.state.email } onChange={ linkState(this, 'form.email') } />
        <h2>Why do you want to be in CL</h2>
        <textarea value={ this.state.response } onChange={ linkState(this, 'form.response') } />
        <div>
          {
            CURRENT_PROJECTS.map( p => { //change to project cards later
              return <div>
                <h1>{ p.title }</h1>
                <p>{ p.text }</p>
              </div>
            })
          }
        </div>
        <h1>first choice</h1>
        <select onChange={ linkState(this, 'form.first_choice') }>
          {
            project_titles.map( p => {
              return <option>{p}</option>
            })
          }
        </select>
        <h1>second choice</h1>
        <select onChange={ linkState(this, 'form.second_choice') }>
          {
            project_titles.map( p => {
              return <option>{p}</option>
            })
          }
        </select>
        <h1>second choice</h1>
        <select value={ this.state.form.third_choice } onChange={ linkState(this, 'form.third_choice') }>
          {
            project_titles.map( p => {
              return <option>{p}</option>
            })
          }
        </select>
        <Button onClick={ this.onSubmit } label='Submit' color='primary' />
      </div>
    );
  }
}

export default Apply;
